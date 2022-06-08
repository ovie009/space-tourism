import './App.css';
import Navbar from "./Navbar.js";
// import Sidebar from "./Sidebar.js";
import Home from "./Home.js";
import { ReactDOM } from 'react-dom/client';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <Sidebar></Sidebar> */}
      <Home></Home>
    </div>
  );
}

export default App;