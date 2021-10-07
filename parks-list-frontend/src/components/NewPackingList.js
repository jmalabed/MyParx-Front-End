import React from 'react'
// import { Button,} from "react-bootstrap";
import {useState} from 'react'

const NewPackingList = (props) => {

  /* useState / useEffect ? */
  const [input, setInput] = useState({
    name: '',
  })

  const [packingList, setPackingList] = useState({})

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
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://myparx.surge.sh"
        }
      }
      const createdPackingList = await fetch("https://project-two-backend.herokuapp.com/packingList", configs)
      const parsedPackingList = await createdPackingList.json()
      console.log("parsed list in new f", parsedPackingList)
      setPackingList(parsedPackingList)
      // return parsedPackingList
      props.history.push('/packingList')
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
      <div>
      {/* first, create name of packing list
        this is a form to create the Name of a packing list */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">New packing list</label>
          <br/><input id="name" name="name" value={input.name} onChange={handleChange} />
          <input type="submit" value="Create" />
        </form>
      </div>

      {/* onSubmit should update state of PackingList */}

    </div>
  )
};

export default NewPackingList;
