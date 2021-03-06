import React, { useState } from "react";
import ParkAddListItem from "./ParkAddListItem";
import { Container, Table } from "react-bootstrap";

import dotenv from "dotenv";
require("dotenv").config();

const ParkAdd = (props) => {
  //set state variables for creating a list of favorited national parks
  const [searchQuery, setSearchQuery] = useState();
  const [parks, setParks] = useState([]);
  // console.log("test", process.env.REACT_APP_API_KEY);

  const getParks = async (e) => {
    try {
      console.log(searchQuery);
      const allParks = await fetch(
        `https://developer.nps.gov/api/v1/parks?q=${searchQuery.query}&api_key=${process.env.REACT_APP_API_KEY}`
      );
      const parsedParks = await allParks.json();
      console.log('json from fetch', parsedParks);
      // how to talk to Nat Park API????
      // console.log(parsedParks.data[0]);
      // console.log(parsedParks.data[0].name);
      // console.log(parsedParks.data[0].description.split(".")[0]);
      setParks(parsedParks.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    getParks();
    // setParks(
    //   parks.filter((park) => park.name.toLowerCase().includes(searchQuery))
    // );
  };

  // When page loads, the use effect will call the fetch function to the national park api and save.

  const parksList = parks.map((park) => <ParkAddListItem parkprop={park} />);

  return (
    <Container className="top-gap">
      <div>
        <a href="/parklist">View Favorites</a>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search parks"
            name="query"
            onChange={handleChange}
          />
          <input type="submit" value="Search" />
        </form>

        <Table  striped bordered hover>
          <thead>
            <th>Name:</th>
            <th>State(s):</th>
            <th>Description:</th>
            <th>Favorite</th>
          </thead>
          {parksList}
        </Table>
      </div>
    </Container>
  );
};

export default ParkAdd;
