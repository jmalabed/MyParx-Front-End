import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom'
import { Button, Table, Row, Col, Container } from "react-bootstrap";
import NewPackingListItem from './NewPackingListItem'
import PackingListDetails from './PackingListDetails'

// USING THIS TO ADD ITEMS TO A PACKING LIST
/* needs to take in props from PackingListDisplay
and pass it to both components:
NewPackingListItem
PackingListDetails
*/

const MakeList = (props) => {

const currentId = props.match.params.id

console.log("currentId from params", currentId)
// const location = useLocation()
// const {item} = location.state
// console.log("location", location)



// https://www.youtube.com/watch?v=RUFxmAjbNbg watched this video i don't know why item is still returning undefined
// const currentId = item
// console.log("props", currentId)



/*
  const [packingListId, setPackingListId] = useState({})

  const getPackingList = async (id) => {
    const foundPackingList = await fetch("http://localhost:9000/packingList/")
    const parsedPackingList = await foundPackingList.json()
    setPackingListId(parsedPackingList)
  }

  useEffect(()=> {
    getPackingList(currentId)
  }, [])

*/


  return (
    <div>
    <br/>
    <h1>Name of Packing List</h1>
    <h2>{props.item}</h2>
    <br/>

      <PackingListDetails  />

      <Button href={`/PackingList/${currentId}/add`}>Add item</Button>


    </div>
  )
}

export default MakeList
