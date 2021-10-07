import React from "react";
import { useState, useEffect } from "react";
// import {BrowserRouter as Router} from 'react-router-dom'
import { Table, Row, Col, Container } from "react-bootstrap";

const PackingListDetails = (props) => {
  // do a get request for all list items associated with X packingList
  // getFilteredItems
  // if item.packingList == PROPS??

  console.log("props from pL details", props);

  /* useState to set list of packingItems */
  const [packingListItems, setPackingListItems] = useState([]);

  /*  getPackingListItems
  function to query backend for list of items associated with packinglist.
  packinglist id comes from parent componenet NewPackingList */
  const getPackingListItems = async () => {
    try {
      const packingListItems = await fetch(
        "https://project-two-backend.herokuapp.com/packingListItem"
      );
      const parsedPackingListItems = await packingListItems.json();
      // console.log(parsedPackingListItems)
      setPackingListItems(parsedPackingListItems);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (id) => {
    console.log("delete function");
    try {
      const deletedItem = await fetch(
        "https://project-two-backend.herokuapp.com/packingListItem/" + id,
        {
          method: "DELETE",
        }
      );
      const parsedItem = await deletedItem.json();
      console.log(parsedItem);
      const updatedItems = packingListItems.filter(
        (item) => item._id !== parsedItem._id
      );
      // set packing list items as items - parsedItem
      setPackingListItems(updatedItems);
    } catch (err) {
      console.log(err);
    }
  };

  const editItem = async (item) => {
    console.log("edit");
    console.log();
    try {
      const editedItem = await fetch(
        "https://project-two-backend.herokuapp.com/packingListItem/" + item._id,
        {
          method: "PUT",
          body: JSON.stringify({ isPacked: item.isPacked }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const parsedUpdatedItem = await editedItem.json();
      // const newItemArrayWithUpdate = packingListItems.map((item) => {
      //   if (item._id === parsedUpdatedItem._id) {
      //     item = parsedUpdatedItem;
      //   }
      // });
      // setPackingListItems(newItemArrayWithUpdate);
      // console.log(packingListItems);
    } catch (err) {
      console.log(err);
    }
  };

  // set items in state
  // setPackingListItems({ ...packingListItems, item: packed });

  /* useEffect to only run query once */
  useEffect(() => {
    getPackingListItems();
  }, []);

  /* updatePackingListItem
  a function to update PackingListItem model boolean ispacked from true to false, etc */

  console.log("packingListItems", packingListItems);

  const packingListItemVar =
    packingListItems &&
    packingListItems
      .filter((item) => item.packingList === props.packingList._id)
      .map((item) => (
        <tr key={item._id}>
          <td>{item.item}</td>
          <td onClick={() => editItem(item)}>{item.isPacked ? "Yes" : "No"}</td>
          <td>
            <button onClick={() => deleteItem(item._id)}>X</button>
          </td>
        </tr>
      ));

  return (
    <div>
      <br />
      <h4>PackingListDetails</h4>

      <Container>
        <Table>
          <Row className="justify-content-md-center">
            <Col sm md lg="auto">
              <thead>
                <tr>
                  <th>item</th>
                  <th>packed</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>{packingListItemVar}</tbody>
            </Col>
          </Row>
        </Table>
      </Container>
      <br />
    </div>
  );
};

export default PackingListDetails;
