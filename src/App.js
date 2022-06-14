import Navbar from "./Navbar.js"; // immport navbar component
import Home from "./Home.js"; // import Home component 
import Destination from './Destination.js'; // import destination component
import Crew from './Crew.js';  // import crew component
import Technology from './Technology.js';  // import technology component
import Moon from './Moon.js';
import Mars from './Mars.js';
import Europa from './Europa.js';
import Titan from './Titan.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // import Browser, Routes & Route

function App() {
  return (
    // wrap entire Browser with BrowserRouter component
    <BrowserRouter>
      <div className="App">
        {/* add navbar component */}
        <Navbar></Navbar>
        {/* Routes */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home/*' element={<Home/>} />
          <Route path='/destination/' element={<Destination/>}>
              <Route path='/destination/' element={<Moon/>} />
              <Route path='/destination/moon' element={<Moon/>} />
              <Route path='/destination/mars' element={<Mars/>} />
              <Route path='/destination/europa' element={<Europa/>} />
              <Route path='/destination/titan' element={<Titan/>} />
          </Route>
          <Route path='/crew/*' element={<Crew/>} />
          <Route path='/technology/*' element={<Technology/>} /> 
          <Route path='/*' element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;