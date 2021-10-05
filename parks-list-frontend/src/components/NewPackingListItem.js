import React from 'react'

const NewPackingListItem = (props) => {
  return (
    <div>
      <h2>New Packing List Item</h2>

      {/* form to add an item to the packing list */}
      <form>
        <label>Item</label>
        <input type="hidden" value="**TOFIX**packinglist"/>
        <input type="text"/>
        {/*this should auto grab id of packing list from parent component */}
        <input type="submit" />
      </form>



    </div>
  )
};

export default NewPackingListItem;
