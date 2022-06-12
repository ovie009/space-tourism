import './Technology.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Vehicle from './Vehicle';
import Spaceport from './Spaceport';
import Capsule from './Capsule';
import useHandlers from './useHandlers';

const Technology = () => {

    const location = useLocation();

    let pathName = location.pathname;
    
    const technologyLinks = [
        '/technology/vehicle',
        '/technology/spaceport',
        '/technology/capsule'
    ];

    const handlers = useHandlers(technologyLinks, pathName);

    return ( 
        <main {...handlers} className="technology">
            <Routes>
              <Route path='/' element={<Vehicle/>} />
              <Route path='/vehicle' element={<Vehicle/>} />
              <Route path='/spaceport' element={<Spaceport/>} />
              <Route path='/capsule' element={<Capsule/>} />
            </Routes>
        </main>
    );
}
 
export default Technology