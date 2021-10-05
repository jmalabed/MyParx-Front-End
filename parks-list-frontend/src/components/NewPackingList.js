import React from 'react'
import NewPackingListItem from './NewPackingListItem'
import PackingListDetails from './PackingListDetails'
import {
  Button,
} from "react-bootstrap";
import {useState, useEffect} from 'react'

const NewPackingList = (props) => {

  /* useState / useEffect ? */
  const [input, setInput] = useState({
    name: '',
  })

  /* function to handleChange to input field and update state */
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value})
    console.log("input", input)
  }

  /* functionn to create new packingList */
  const newPackingList = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }
      const createdPackingList = await fetch("http://localhost:9000/packingList", configs)
      const parsedPackingList = await createdPackingList.json()
      console.log("parsed list in new f", parsedPackingList)
      // props.history.push('/packingListItem')
      // props.setBooks([...props.books, parsedBook])
      } catch(err) {
        console.log(err)
      }
    }

  /* function to hanldeSubmit */
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("input from handleSubmit", input)
    newPackingList(input)
  }

  return (
    <div>
      <h1>New Packing List</h1>

      <div>
      {/* first, create name of packing list
        this is a form to create the Name of a packing list */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name of packing list</label>
          <br/><input id="name" name="name" value={input.name} onChange={handleChange} />
          <input type="submit" value="Create" />
        </form>
      </div>

      {/* second, create an item and add it to the list,
        this is a component: NewPackingListItem
        can we hide this component until a newPackingList has been created ?*/}
        <NewPackingListItem />

        {/* third, display the list of items added to this packing list */}
        <PackingListDetails/>

      <Button>Return to Main</Button>
    </div>
  )
};

export default NewPackingList;
