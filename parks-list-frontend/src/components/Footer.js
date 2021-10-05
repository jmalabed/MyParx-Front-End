import { Card, CardGroup } from "react-bootstrap";

export default function Footer() {
    return (
    <CardGroup>
        <Card>
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Img src="./logo/logo.png"/>
            <Card.Text>
                Company Slogan goes here
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>Routes</Card.Title>
            <Card.Text>
                <ul>
                    <li>Home</li>
                    <li>National Parks</li>
                    <li>Packing Lists</li>
                    <li></li>
                </ul>
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
            <Card.Title>Github</Card.Title>
            <Card.Text>
                <ul>
                    <li>Jared</li>
                    <li>Alex</li>
                    <li>Jess</li>
                    <li>Michael</li>
                </ul>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <a href="" target="_blank"><p>a tag to githib repo</p></a>
            </Card.Footer>
        </Card>
    </CardGroup>
    )
}
