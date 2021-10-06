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
  // console.log("currentId from params", currentId)

  const [packingListId, setPackingListId] = useState({})

  const getPackingList = async (id) => {
    try {
      const foundPackingList = await fetch("https://project-two-backend.herokuapp.com/packingList/"+id)
      const parsedPackingList = await foundPackingList.json()
      setPackingListId(parsedPackingList)
      // console.log("parsedPL from getPackingList function", parsedPackingList)
  } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    getPackingList(currentId)
    // console.log("is your useEffect running better catch it")
  }, [])


  return (
    <div>
    <br/>
    <h2>{packingListId.name}</h2>
    <br/>

      <PackingListDetails packingList={packingListId} />

      <Button href={`/PackingList/${currentId}/add`}>Add item</Button>


    </div>
  )
}

export default MakeList
