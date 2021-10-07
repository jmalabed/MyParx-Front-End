import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Alex from "../assets/alex.jpg";
import Jess from "../assets/jess.jpg";
import Michael from "../assets/michael.jpeg";
import Jared from "../assets/jared.jpg";

const About = (props) => {
  return (
    <Container className="container mx-auto top-gap">
      <Row>
        <Col xs={12} md={6}>
          <Card className="deplayerz mt-4 mb-2" id="alex">
            <Card.Img variant="top" src={Alex} className="about-img" />
            <Card.Body>
              <Card.Title>Alex</Card.Title>
              <Card.Text>
                Webpage? I can style that. My hair? I can style that, too.
                Around these parks, I’m kind of a big style deal. Just ask Yogi
                Bear.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="deplayerz mt-4 mb-2" id="jared">
            <Card.Img variant="top" src={Jared} className="about-img" />
            <Card.Body>
              <Card.Title>Jared</Card.Title>
              <Card.Text>
                Jared is my name, and software development is my game. When it’s
                not park ranging season, I enjoy bicycles, boardsports,
                photography, and camping. But when is it not park ranging
                season?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <Card className="deplayerz mt-2 mb-4" id="jess">
            <Card.Img variant="top" src={Jess} className="about-img" />
            <Card.Body>
              <Card.Title>Jess</Card.Title>
              <Card.Text>
                “Remember kids, only you can prevent merge conflicts.”
                <br />- Smokey the Bear, pretty sure.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="deplayerz mt-2 mb-4" id="michael">
            <Card.Img variant="top" src={Michael} className="about-img" />
            <Card.Body>
              <Card.Title>Michael</Card.Title>
              <Card.Text>
                Part-time coder, full-time Marvel enthusiast. I like helping
                people solve problems, spiderman, and the great outdoors.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default About;
