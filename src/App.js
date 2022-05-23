import "./App.css";
import Home from "../src/screens/Home/homeScreen"
import Abhishar from "../src/screens/Abhishar/abhisharScreen"
import Blogs from "../src/screens/Blogs/blogsScreen"
import Events from "../src/screens/Events/eventsScreen"
import Team from "../src/screens/Team/teamScreen"
import Contact from "../src/screens/Contact/contactScreen"
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/abhishar">
          <Abhishar />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  </div>;
}

export default App;
