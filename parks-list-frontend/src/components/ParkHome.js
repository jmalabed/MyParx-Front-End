import { Stack, Row, Col, Container, Card } from "react-bootstrap";


const ParkHome = (props) => {
  return (
    // <Stack gap={4} >
    //   <div className="bg-light border">
    //     Meet The DeplAyerz
    //     <br />
    //     <img src="https://images.unsplash.com/photo-1592610687683-41d676fcda72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=200&q=100" />
    //   </div>
    //   <div className="bg-light border">
    //     <p>Parks List</p>
    //     <p>Notable Park List Here</p>
    //   </div>
    //   <div className="bg-light border">
    //     <p>Packing List</p>
    //   </div>
    //   <div className="bg-light border">
    //     <p>This is What the page is all about goes here</p>
    //   </div>
    // </Stack>
    <Container className="mt-4 mb-4 container">
      <Row>
        <Col xs={12} md={6}>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Parks List</Card.Title>
              <Card.Text>Notable Park List Here</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title>Packing List List</Card.Title>
              <Card.Text>--</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
    </Container>
  );
};
export default ParkHome;
