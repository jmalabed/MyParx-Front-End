import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Link, Switch, withRouter, useHistory } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Card,
  Button,
  Table,
  Tabs,
  Tab,
  Figure,
} from "react-bootstrap";
import ParkList from "./components/ParkList";
import ParkAdd from "./components/ParkAdd";
import ParkDetail from "./components/ParkDetail";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/myparx">MyParx</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <Switch>
        <Route
          exact
          path="/parklist"
          render={(routerProps) => <ParkList {...routerProps} />}
        />
        <Route
          exact
          path="/parklist/add"
          render={(routerProps) => <ParkAdd {...routerProps} />}
        />
        <Route
          exact
          path="/parklist/:id"
          render={(routerProps) => <ParkDetail {...routerProps} />}
        />
      </Switch>

      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

export default App;
