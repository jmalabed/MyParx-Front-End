import React from "react";
import { useState, useEffect } from "react";
// import {BrowserRouter as Router} from 'react-router-dom'
import { Table, Row, Col, Container } from "react-bootstrap";

const PackingListDetails = (props) => {
  const [packingListItems, setPackingListItems] = useState([]);

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

  const editItem = async (itemArg) => {
    console.log("edit");
    console.log();
    let { item, packingList, isPacked } = itemArg;
    console.log(!isPacked);
    const isPackedNot = !isPacked;
    console.log(isPacked);
    const update = { item, packingList, isPacked: isPackedNot };
    console.log(update);
    console.log(itemArg);
    try {
      const editedItem = await fetch(
        "https://project-two-backend.herokuapp.com/packingListItem/" +
          itemArg._id,
        {
          method: "PUT",
          body: JSON.stringify(update),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const parsedUpdatedItem = await editedItem.json();
      console.log(parsedUpdatedItem);
      console.log(packingListItems);
      const updatedPackingListItems = packingListItems.map((itemArg2) =>
        itemArg2._id === parsedUpdatedItem._id ? parsedUpdatedItem : itemArg2
      );
      console.log(updatedPackingListItems);
      setPackingListItems(updatedPackingListItems);
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

  // console.log("packingListItems", packingListItems);

  const packingListItemVar =
    packingListItems &&
    packingListItems
      .filter((item) => item.packingList === props.packingList._id)
      .map((item) => (
        <tr key={item._id}>
          <td>{item.item}</td>
          <td onClick={() => editItem(item)}>
            {item.isPacked ? <button>Yes</button> : <button>No</button>}
          </td>
          <td>
            <button onClick={() => deleteItem(item._id)}>X</button>
          </td>
        </tr>
      ));

  return (
    <div className="top-gap">
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
