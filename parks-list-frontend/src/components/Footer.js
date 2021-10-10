import { Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import logo from "../logo/logo.png"
import {Link} from "react-router-dom"
export default function Footer() {
    return (
      <Container className="footer">
        <Row>
          <Col md={4} xs={12} className="footer-column">
            <img className="logo" src={logo} />
          </Col>
          <Col md={4} xs={12} className="footer-column">
            Routes
            <ul className="footer-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/parklist">Parks</Link>
              </li>
              <li>
                <Link to="/packinglist">PackingList</Link>
              </li>
            </ul>
          </Col>
          <Col md={4} xs={12} className="footer-column">
            Github
            <ul className="footer-list">
              <li>
                <a href="https://github.com/jmalabed" target="_blank">
                  Jared
                </a>
              </li>
              <li>
                <a href="https://github.com/alxalves" target="_blank">
                  Alex
                </a>
              </li>
              <li>
                <a href="https://github.com/jlafrank1" target="_blank">
                  Jess
                </a>
              </li>
              <li>
                <a href="https://github.com/hamilton-mike" target="_blank">
                  Michael
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      // <CardGroup>
      //     <Card>
      //         <Card.Body>
      //         <Card.Title>Card title</Card.Title>
      //         <Card.Img src="./logo/logo.png"/>
      //         <Card.Text>
      //             Company Slogan goes here
      //         </Card.Text>
      //         </Card.Body>
      //     </Card>
      //     <Card>
      //         <Card.Body>
      //         <Card.Title>Routes</Card.Title>
      //         <Card.Text>
      //             <ul>
      //                 <li>Home</li>
      //                 <li>National Parks</li>
      //                 <li>Packing Lists</li>
      //                 <li></li>
      //             </ul>
      //         </Card.Text>
      //         </Card.Body>
      //     </Card>
      //     <Card>
      //         <Card.Body>
      //         <Card.Title>Github</Card.Title>
      //         <Card.Text>
      //             <ul>
      //                 <li>Jared</li>
      //                 <li>Alex</li>
      //                 <li>Jess</li>
      //                 <li>Michael</li>
      //             </ul>
      //         </Card.Text>
      //         </Card.Body>
      //         <Card.Footer>
      //         <a href="" target="_blank"><p>a tag to githib repo</p></a>
      //         </Card.Footer>
      //     </Card>
      // </CardGroup>
    );
}
