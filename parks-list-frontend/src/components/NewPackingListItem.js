import React from 'react'
import {useState, useEffect} from 'react'

const NewPackingListItem = (props) => {

  /* useState / useEffect ? */
  const [input, setInput] = useState({
    item: '',
  })

  /* function to find packingList id/name? to pass through via a hidden field */

  /* function to handleChange to input field and update state */
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value})
    console.log("input", input)
    // console.log(props.listName._id)
  }

  /* function to create packingListItem */
  const newPackingListItem = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }
      const createdPackingListItem = await fetch("http://localhost:9000/packingListItem", configs)
      const parsedPackingListItem = await createdPackingListItem.json()
      console.log("parsed item in new f", parsedPackingListItem)
      // props.history.push('/packingListItem')
      // props.setBooks([...props.books, parsedBook])
      } catch(err) {
        console.log(err)
      }
    }

  /* function to handleSubmit */
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("input from handleSubmit", input)
    /* also add prop to pass props.listName._id */
    newPackingListItem({...input, ...{packingList: props.listName._id}})
  }

  /* useEffect to only run query once */
  useEffect( ()=> {
    newPackingListItem()
  }, [])

  console.log("from newpackinglistitem props > ", props.listName._id)

  return (
    <div>
      <h2>New Packing List Item</h2>

      {/* form to add an item to the packing list */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item</label>
        <br/><input id="item" name="item" value={input.item} onChange={handleChange}/>

        {/*this should auto grab id of packing list from parent component */}
        <br/><input type="hidden" id="packingList" name="packingList" value={props.listName._id}/>

        <br/><input type="submit" value="Add Item"/>
      </form>



    </div>
  )
};

export default NewPackingListItem;
