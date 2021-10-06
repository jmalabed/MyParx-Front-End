import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Link, Switch, withRouter, useHistory } from "react-router-dom";
import NavBar from "./components/NavBar";
import Slider from './components/Slider'
import ParkList from "./components/ParkList";
import ParkAdd from "./components/ParkAdd";
import ParkDetail from "./components/ParkDetail";
import ParkHome from "./components/ParkHome";
import About from "./components/About";
import PackingList from "./components/PackingList";
import Footer from "./components/Footer";
import ParkEdit from "./components/ParkEdit";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Slider className="top-gap" />
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <ParkHome {...routerProps} />}
        />
        <Route
          exact
          path="/about"
          render={(routerProps) => <About {...routerProps} />}
        />
        <Route
          exact
          path="/PackingList"
          render={(routerProps) => <PackingList {...routerProps} />}
        />
        <Route
          exact
          path="/packingList/new"
          render={(routerProps) => <NewPackingList {...routerProps} />}
        />
        <Route
          exact
          path="/NewPackingListItem"
          render={(routerProps) => <NewPackingListItem {...routerProps} />}
        />
        <Route
          exact
          path="/PackingList/:id"
          render={(routerProps) => <MakeList {...routerProps} />}
        />
        <Route
          exact
          path="/PackingList/:id/add"
          render={(routerProps) => <NewPackingListItem {...routerProps} />}
        />
        <Route
          exact
          path="/PackingListDisplay"
          render={(routerProps) => <PackingListDisplay {...routerProps} />}
        />
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
        <Route
          exact
          path="/parklist/:id/edit"
          render={(routerProps) => <ParkEdit {...routerProps} />}
        />
        <Route path="/" render={(routerProps) => <Oops {...routerProps} />} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
