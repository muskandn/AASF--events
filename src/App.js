import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
  <BrowserRouter>
    <Navbar></Navbar>
  <div>Hi</div>
  </BrowserRouter>
  </div>
  );
}

export default App;
