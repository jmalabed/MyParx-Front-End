import React from 'react'
import {useState,useEffect} from 'react'
// import {BrowserRouter as Router} from 'react-router-dom'
import { Table, Row, Col, Container } from "react-bootstrap";

const PackingListDetails = (props) => {

  // do a get request for all list items associated with X packingList
  // getFilteredItems
  // if item.packingList == PROPS??

  console.log("props from pL details", props)


  /* useState to set list of packingItems */
  const [packingListItems, setPackingListItems] = useState([])


  /*  getPackingListItems
  function to query backend for list of items associated with packinglist.
  packinglist id comes from parent componenet NewPackingList */
  const getPackingListItems = async() => {
    try {
      const packingListItems = await fetch("http://localhost:9000/packingListItem")
      const parsedPackingListItems = await packingListItems.json()
      // console.log(parsedPackingListItems)
      setPackingListItems(parsedPackingListItems)
    } catch(err) {
      console.log(err)
    }
  }

  /* useEffect to only run query once */
  useEffect( ()=> {
    getPackingListItems()
  }, [])

  /* updatePackingListItem
  a function to update PackingListItem model boolean ispacked from true to false, etc */

  console.log("packingListItems", packingListItems)

  return (
    <div>
      <br/>
      <h4>PackingListDetails</h4>

      <Container>
        <Table>
          <Row className="justify-content-md-center">
            <Col sm md lg="auto">
              <thead>
                <tr>
                  <th>item</th>
                  <th>packed</th>
                </tr>
              </thead>
              <tbody>
              {packingListItems && packingListItems.filter(item => item.packingList === props.packingList._id).map(item =>
                <tr key={item._id}>
                  <td>{item.item}</td>
                  <td>{item.isPacked ? "Yes": "No" }</td>
                </tr>
              )}
              </tbody>
            </Col>
          </Row>
        </Table>
      </Container>
    <br/>
    </div>
  )
}


export default PackingListDetails
