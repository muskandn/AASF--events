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
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/abhishar" element={<Abhishar />}>
        </Route>
        <Route exact path="/blogs" element={<Blogs />}>
        </Route>
        <Route exact path="/events" element={<Events />}>
        </Route>
        <Route exact path="/team" element={<Team />}>
        </Route>
        <Route exact path="/contact" element={<Contact />}>
        </Route>
      </Routes>
    </Router>
  </div>;
}

export default App;
