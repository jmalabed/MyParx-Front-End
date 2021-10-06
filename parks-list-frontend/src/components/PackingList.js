import React from 'react'
import {
  Button,
} from "react-bootstrap";
import PackingListDisplay from './PackingListDisplay'
import ParkList from './ParkList'

const PackingList = (props) => {


  return (

    <div>
      <h1>Manage Packing Lists</h1>

      <ParkList/>
      <PackingListDisplay />

    </div>
  )
};

export default PackingList;
