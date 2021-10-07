import { Stack, Row, Col, Container, Card } from "react-bootstrap";
import Slider from "../components/Slider";
import {Link} from "react-router-dom"

const ParkHome = (props) => {
  return (
    <>
      <Slider className="top-gap" />
      <Container className="mt-4 mb-4 container">
        <Row>
          <Col xs={12} md={6}>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>Parks List</Card.Title>
                <Link to= "/parklist"> Park List </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>Packing List</Card.Title>
                <Link to= "./packingList/new"> New Packing List</Link>
                <Card.Text>--</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ParkHome;
