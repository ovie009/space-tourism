import './Destination.css';
import Moon from './Moon.js';
import Mars from './Mars.js';
import Europa from './Europa.js';
import Titan from './Titan.js';
import { Routes, Route, useLocation } from 'react-router-dom';
import useHandlers from './useHandlers';

const Destination = () => {

    const location = useLocation();

    let pathName = location.pathname;

    const destinationLinks = [
        '/destination/moon',
        '/destination/mars',
        '/destination/europa',
        '/destination/titan'
    ];

    const handlers = useHandlers(destinationLinks, pathName);


    return ( 
        <main {...handlers} className="destination">
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