import React from 'react'
import NewPackingListItem from './NewPackingListItem'

const NewPackingList = (props) => {
  return (
    <div>
      <h1>New Packing List</h1>

      {/* first, create name of packing list
        this is a form to create the Name of a packing list */}


      {/* second, create an item and add it to the list,
        this is a component: NewPackingListItem ?*/}
        <NewPackingListItem />


      <button>Return to Main</button>
    </div>
  )
};

export default NewPackingList;
