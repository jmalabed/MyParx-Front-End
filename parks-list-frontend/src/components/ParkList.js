import { useState, useEffect } from "react";
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
  });

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
            <th>Companions</th>
            <th>Date of Visit</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ParkName</td>
            <td>State</td>
            <td>PackingList</td>
            <td>Visited</td>
            <td>Pets</td>
            <td>Companions</td>
            <td>Date of Visit</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default ParkList;
