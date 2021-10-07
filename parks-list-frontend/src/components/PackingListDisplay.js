import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Table, Figure } from "react-bootstrap";

const PackingList = (props) => {
  /* useState to set list of packingItems */
  const [packingLists, setPackingLists] = useState([]);
  const [packingList, setPackingList] = useState([]);

  /* function for getPackingLists */
  const getPackingLists = async () => {
    try {
      const packingLists = await fetch(
        "https://project-two-backend.herokuapp.com/packingList"
      );
      const parsedPackingLists = await packingLists.json();
      // console.log(parsedPackingListItems)
      setPackingLists(parsedPackingLists);
      console.log(parsedPackingLists);
    } catch (err) {
      console.log(err);
    }
  };

  /* function for getPackingList */
  const getPackingList = async (id) => {
    try {
      const id = props.match.props.id;
      console.log(id);
      const packingList = await fetch(
        `https://project-two-backend.herokuapp.com/packingList/${id}`
      );
      const parsedPackingList = await packingList.json();
      // console.log(parsedPackingListItems)
      setPackingList(parsedPackingList);
      console.log(parsedPackingList);
    } catch (err) {
      console.log(err);
    }
  };

  /* useEffect to only run query once */
  useEffect(() => {
    getPackingLists();
    getPackingList();
  }, []);

  return (
    <div>
      {/* table of Packing Lists
        with EDIT button on each
        EDIT goes to NewPackingListItem page */}

      <Table>
        <thead>
          <tr>
            <th>Packing List Name</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {packingLists &&
            packingLists.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>
                  <Link to={"/PackingList/" + item._id} item={item}>
                    View List
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Button href="/packingList/new">Add packing list</Button>
    </div>
  );
};

export default PackingList;
