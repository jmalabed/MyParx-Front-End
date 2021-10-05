import React from 'react'
import {useState,useEffect} from 'react'

const PackingListDetails = (props) => {
  /* useState to set list of packingItems */
  const [packingListItems, setPackingListItems] = useState([])

  /*  getPackingListItems
  function to query backend for list of items associated with packinglist.
  packinglist id comes from parent componenet NewPackingList */
  const getPackingListItems = async() => {
    try {
      const packingListItems = await fetch("http://localhost:9000/packingListItem")
      const parsedPackingListItems = await packingListItems.json()
      console.log(parsedPackingListItems)
      setPackingListItems()
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

  return (
    <div>
      <h3>list of items associated with parent packinglist</h3>

      <table>
        <thead>
          <tr>
            <th>item</th>
            <th>packed</th>
          </tr>
        </thead>
        <tbody>
        {packingListItems && packingListItems.map(packingListItem=>
          <tr key={packingListItem._id}>
            <td>{packingListItem.name}</td>
            <td>{packingListItem.isPacked}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}


export default PackingListDetails