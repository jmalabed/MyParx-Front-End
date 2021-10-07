import { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";

const ParkList = (props) => {
  const [parks, setParks] = useState([]);

  const getParks = async () => {
    try {
      const parks = await fetch(
        "https://project-two-backend.herokuapp.com/bucketList"
      );
      const parsedParks = await parks.json();
      console.log(parsedParks);
      setParks(parsedParks);
    } catch (err) {
      console.log(err);
    }
  };

  const editPark = async (id) => {
    const updatedPark = await fetch(
      `https://project-two-backend.herokuapp.com/bucketList/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const parsedPark = await updatedPark.json();
    console.log(parsedPark);
  };

  const deletePark = async (id) => {
    try {
      const deletedPark = await fetch(
        "https://project-two-backend.herokuapp.com/bucketList/" + id,
        {
          method: "DELETE",
        }
      );
      const parsedPark = await deletedPark.json();
      console.log(parsedPark);
      const updatedParks = parks.filter((park) => park._id !== parsedPark._id);
      setParks(updatedParks);
    } catch (err) {
      console.log(err);
    }
  };

  const parkRow = parks.map((park) => (
    <tr>
      <td>{park.name}</td>
      <td>packingList</td>
      <td>{park.visited ? "Yes" : "No"}</td>
      <td>Pets</td>
      <td>
        <ul>
          {park.people.map((person) => (
            <li>{person}</li>
          ))}
        </ul>
      </td>
      <td>{park.date}</td>
      <td onClick={() => editPark(park._id)}>
        <button>
          <a href={"/parklist/" + park._id + "/edit"}>Edit</a>
        </button>
      </td>
      <td onClick={() => deletePark(park._id)}>
        <button>Delete</button>
      </td>
    </tr>
  ));

  const checkBox = parks.map((park) => {
    console.log(parks);
  });

  useEffect(() => {
    getParks();
  }, []);

  return (
    <Container className="top-gap">
      <div>
        <a href="/parklist/add">Add</a>
        <Table responsive>
          <thead>
            <tr>
              <th>Park Name</th>
              <th>PackingList</th>
              <th>Visited</th>
              <th>Pets</th>
              <th>People</th>
              <th>Date of Visit</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{parkRow}</tbody>
        </Table>
      </div>
    </Container>
  );
};
export default ParkList;
