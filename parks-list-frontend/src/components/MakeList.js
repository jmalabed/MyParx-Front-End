import React from 'react'
import { useState, useEffect } from 'react'
import NewPackingListItem from './NewPackingListItem'
import PackingListDetails from './PackingListDetails'


const MakeList = (props) => {
// const location = useLocation()
// const {item} = location.state

// https://www.youtube.com/watch?v=RUFxmAjbNbg watched this video i don't know why item is still returning undefined
const currentId = props.item._id
console.log("props.item", currentId)


  /* needs to take in props from PackingListDisplay
  and pass it to both components:
  NewPackingListItem
  PackingListDetails
  */

  const [packingListId, setPackingListId] = useState({})

  const getPackingList = async (id) => {
    const foundPackingList = await fetch("http://localhost:9000/packingList/")
    const parsedPackingList = await foundPackingList.json()
    setPackingListId(parsedPackingList)
  }

  useEffect(()=> {
    getPackingList(currentId)
  }, [])


  return (
    <div>
    <h1>:D</h1>
    <h2>{props.item}</h2>

      <NewPackingListItem listName={currentId} />
      <PackingListDetails listName={currentId} />

    </div>
  )
}

export default MakeList
