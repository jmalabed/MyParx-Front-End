import { Link, useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ParkList = (props) => {
  const [parks, setParks] = useState([]);

  const getParks = async () => {
    try {
      const parks = await fetch("http://localhost:9000/bucketList");
      const parsedParks = await parks.json();
      console.log(parsedParks);
      setParks(parsedParks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getParks();
  }, []);

  const editPark = async (id) => {
    const updatedPark = await fetch(`https://project-two-backend.herokuapp.com/bucketList/${id}`, {
      method: "PUT",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      <td>state</td>
      <td>PackingList from Jess Code</td>
      <td>{park.visited ? "Yes" : "No"}</td>
      <td>Pets</td>
      <td>{park.people}</td>
      <td>Date of Visit</td>
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

  return (
    <div>
      <a href="/parklist/add">Add</a>
      <Table responsive>
        <thead>
          <tr>
            <th>Park Name</th>
            <th>State</th>
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
  );
};
export default ParkList;
