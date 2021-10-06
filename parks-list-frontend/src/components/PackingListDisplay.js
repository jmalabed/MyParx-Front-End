import React from 'react'
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NewPackingList from './NewPackingList'

const PackingList = (props) => {
  /* useState to set list of packingItems */
  const [packingLists, setPackingLists] = useState([])

/* function for getBucketList */

/* function for getPackingList */
const getPackingLists = async() => {
  try {
    const packingLists = await fetch("http://localhost:9000/packingList")
    const parsedPackingLists = await packingLists.json()
    // console.log(parsedPackingListItems)
    setPackingLists(parsedPackingLists)
  } catch(err) {
    console.log(err)
  }
}

/* useEffect to only run query once */
useEffect( ()=> {
  getPackingLists()
}, [])

  return (

    <div>


      {/* table of Packing Lists
        with EDIT button on each
        EDIT goes to NewPackingListItem page */}
      <h2>Packing Lists</h2>
      <table>
        <thead>
          <tr>
            <th>Packing List Name</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
        {packingLists && packingLists.map(item =>
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>EDIT</td>
          </tr>
        )}
        </tbody>
      </table>




    </div>
  )
};

export default PackingList;
