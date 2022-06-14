import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./Home.js"; // import Home component 
import Destination from './Destination.js'; // import destination component
import Crew from './Crew.js';  // import crew component
import Technology from './Technology.js';  // import technology component
import Moon from './Moon.js';
import Mars from './Mars.js';
import Europa from './Europa.js';
import Titan from './Titan.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // import Browser, Routes & Route


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
        {/* add navbar component */}
        {/* Routes */}
        <Routes>
          <Route path='/' element={<App/>} > 
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
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
          </Route>
        </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
