import React from 'react'

const NewPackingListItem = (props) => {

  /* useState / useEffect ? */

  /* function to find packingList id/name? to pass through via a hidden field */

  /* function to handleChange to input field and update state */

  /* function to create packingListItem */

  /* function to handleSubmit */

  return (
    <div>
      <h2>New Packing List Item</h2>

      {/* form to add an item to the packing list */}
      <form>
        <label>Item</label>
        <input type="hidden" value="TOFIX"/>
        <input type="text"/>
        {/*this should auto grab id of packing list from parent component */}
        <input type="submit" />
      </form>



    </div>
  )
};

export default NewPackingListItem;
