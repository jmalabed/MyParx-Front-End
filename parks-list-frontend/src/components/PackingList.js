import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Card,
  Button,
  Table,
  Tabs,
  Tab,
  Figure,
} from "react-bootstrap";

const PackingList = (props) => {



  return (
    <div>
      <h1>PackingList</h1>

      <div>
      {/* box for list of bucketList parks */}
      <h2>Parks</h2>
      </div>

      <div>
      {/* dropdown for list of Packing Lists */}
      <h2>Packing Lists</h2>
      </div>

      <div>
      {/* Button to link to Add packingListItems page*/}
      <Button>Create New Packing List</Button>
      </div>

      <Button>Return to Main</Button>
    </div>
  )
};

export default PackingList;
