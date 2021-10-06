import React from 'react'
import {
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import NewPackingList from './NewPackingList'
import PackingListDisplay from './PackingListDisplay'

const PackingList = (props) => {


  return (

    <div>
      <h1>Manage Packing Lists</h1>

        <Router>
          <Switch>
            <Route exact path="/packingList/new" render={(routerProps)=> <NewPackingList {...routerProps}/> } />
            <Route exact path="/packingList" component={PackingListDisplay} />
          </Switch>
        </Router>
        <br/><Button>Return to Main</Button>
    </div>
  )
};

export default PackingList;
