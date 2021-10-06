import React from 'react'
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
} from "react-bootstrap";
import NewPackingList from './NewPackingList'
import PackingListDisplay from './PackingListDisplay'

const PackingList = (props) => {


  return (

    <div>
      <h1>Manage Packing Lists</h1>

      <NewPackingList />
      <PackingListDisplay />

      <Button>Return to Main</Button>
    </div>
  )
};

export default PackingList;
