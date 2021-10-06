import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Alex from '../assets/alex.jpg';
import Jess from '../assets/jess.jpg';
import Michael from '../assets/michael.jpeg';
import Clown from '../assets/clown.jpeg';

const About = (props) => {
  return (
    <Container className="container mx-auto">
      <Row>
        <Col xs={12} md={6}>
          <Card className="deplayerz mt-4 mb-2" id="alex">
            <Card.Img variant="top" src={Alex} className="about-img" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="deplayerz mt-4 mb-2" id="jared">
            <Card.Img
              variant="top"
              src={Clown}
              
              className="about-img"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Card className="deplayerz mt-2 mb-4" id="jess">
            <Card.Img variant="top" src={Jess}  className="about-img" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="deplayerz mt-2 mb-4" id="michael">
            <Card.Img variant="top" src={Michael}  className="about-img" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
