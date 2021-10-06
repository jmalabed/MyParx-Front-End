import React from 'react'
import {
  Container,
  Col,
  Row,
} from "react-bootstrap";
import PackingListDisplay from './PackingListDisplay'

const PackingList = (props) => {


  return (

    <div>
      <br/>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs md lg ="auto">
              <h2>List of available packing lists</h2>
              <PackingListDisplay />
            </Col>
          </Row>
        </Container>

      <br/>
    </div>
  )
};

export default PackingList;
