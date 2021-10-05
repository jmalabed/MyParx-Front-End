import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const PackingList = (props) => {
  return (
    <div>
      <h1>PackingList</h1>

      <div>
      {/* box for list of bucketList parks */}
      <h2>Parks</h2>
      </div>

      <div>
      {/* dropdown for list of Packing Lists */}
      <h2>Packing Lists</h2>
      </div>

      <div>
      {/* Button to link to Add packingListItems page*/}
      <button>Create New Packing List</button>
      </div>

      <button>Return to Main</button>
    </div>
  )
};

export default PackingList;
