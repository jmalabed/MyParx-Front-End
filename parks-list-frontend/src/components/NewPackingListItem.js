import React from "react";
import { useState, useEffect } from "react";

const NewPackingListItem = (props) => {
  console.log("newpackinglistitem props", props.listName);
  console.log("packinglist id from props", props.match.params.id);

  /* useState / useEffect ? */
  const [input, setInput] = useState({
    item: "",
    packingList: props.match.params.id,
  });

  /* function to find packingList id/name? to pass through via a hidden field */

  /* function to handleChange to input field and update state */
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log("input", input);
    // console.log(props.listName._id)
  };

  /* function to create packingListItem */
  const newPackingListItem = async (data) => {

    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const createdPackingListItem = await fetch(
        "https://project-two-backend.herokuapp.com/packingListItem",
        configs
      );
      const parsedPackingListItem = await createdPackingListItem.json();
      console.log("parsed item in new f", parsedPackingListItem);
      const id = props.match.params.id
      props.history.push(`/packingList/${id}`)
      // props.setBooks([...props.books, parsedBook])
    } catch (err) {
      console.log(err);
    }
  };

  /* function to handleSubmit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("input from handleSubmit", input);
    /* also add prop to pass props.listName._id */
    newPackingListItem(input);
    alert("Item added to list!");
    setInput({ item: "", packingList: input.packingList });
  };

  // console.log("from newpackinglistitem props > ", props.listName._id)

  return (
    <div>
      {/* form to add an item to the packing list */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Add item to packing List</label>
        <br />
        <input
          id="item"
          name="item"
          value={input.item}
          onChange={handleChange}
        />
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default NewPackingListItem;
