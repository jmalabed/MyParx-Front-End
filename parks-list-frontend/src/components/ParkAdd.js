import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import dotenv from "dotenv";
require("dotenv").config();

const ParkAdd = (props) => {
  //set state variables for creating a list of favorited national parks
  const [searchQuery, setSearchQuery] = useState([]);
  console.log("test", process.env.REACT_APP_API_KEY);
  const getParks = async (e) => {
    try {
      const allParks = await fetch(
        `https://developer.nps.gov/api/v1/parks?&api_key=${process.env.REACT_APP_API_KEY}`
      );
      const parsedParks = await allParks.json();
      // how to talk to Nat Park API???? Singular
      console.log(parsedParks.data[0]);
      console.log(parsedParks.data[0].name);
      console.log(parsedParks.data[0].description.split(".")[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    console.log(e);
    console.log([e.target.name]);
    console.log(([e.target.name]: e.target.value));
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
    console.log(searchQuery);
  };
  // When page loads, the use effect will call the fetch function to the national park api and save.
  useEffect(() => {
    getParks();
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="search parks"
        name="query"
        onChange={handleChange}
      />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ParkAdd;
