import './Destination.css';
import Moon from './Moon.js';
import Mars from './Mars.js';
import Europa from './Europa.js';
import Titan from './Titan.js';
import { Routes, Route } from 'react-router-dom';

const Destination = () => {

    return ( 
        <main className="destination">
            <Routes>
              <Route path='/' element={<Moon/>} />
              <Route path='/moon' element={<Moon/>} />
              <Route path='/mars' element={<Mars/>} />
              <Route path='/europa' element={<Europa/>} />
              <Route path='/titan' element={<Titan/>} />
            </Routes>
        </main>
    );
}
 
export default Destination