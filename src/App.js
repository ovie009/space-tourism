import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Destination from './Destination.js';
import Crew from './Crew.js';
import Technology from './Technology.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/destination' element={<Destination/>} />
          <Route path='/crew' element={<Crew/>} />
          <Route path='/technology' element={<Technology/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;