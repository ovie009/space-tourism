import { Outlet } from 'react-router-dom';  // import Browser, Routes & Route
import Navbar from "./Navbar.js"; // immport navbar component

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
}

export default App;