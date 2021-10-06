import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import {
  Button,
  Table,
  Figure,
} from "react-bootstrap";



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

      <Table>
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
            <td>
              <Link to='/MakeList' item={item}>Add Items to List</Link>
            </td>
          </tr>
        )}
        </tbody>
      </Table>

      <Button href='/packingList/new'>Add packing list</Button>

    </div>
  )
};

export default PackingList;
