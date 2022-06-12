import Navbar from "./Navbar.js"; // immport navbar component
import Home from "./Home.js"; // import Home component 
import Destination from './Destination.js'; // import destination component
import Crew from './Crew.js';  // import crew component
import Technology from './Technology.js';  // import technology component
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
          <Route path='/' element={<Home/>} /> {/* let default path be home */}
          <Route path='/home/*' element={<Home/>} /> {/* Rout to Home component */}
          <Route path='/destination/*' element={<Destination/>} /> {/* Route to destination component */}
          <Route path='/crew/*' element={<Crew/>} /> {/* Route to Crew component */}
          <Route path='/technology/*' element={<Technology/>} /> {/* Route to tecnhology component */}
          <Route path='/*' element={<Home/>} /> {/* Route every other path to home component */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;