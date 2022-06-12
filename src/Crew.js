import './Crew.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Commander from './Commander';
import Specialist from './Specialist';
import Pilot from './Pilot';
import Engineer from './Engineer';
import useHandlers from './useHandlers';

const Crew = () => {

    const location = useLocation();

    let pathName = location.pathname;

    const crewLinks = [
        '/crew/commander',
        '/crew/specialist',
        '/crew/pilot',
        '/crew/engineer'
    ];

    const handlers = useHandlers(crewLinks, pathName);

    return ( 
        <main {...handlers} className="crew">
            <Routes>
              <Route path='/' element={<Commander/>} />
              <Route path='/commander' element={<Commander/>} />
              <Route path='/specialist' element={<Specialist/>} />
              <Route path='/pilot' element={<Pilot/>} />
              <Route path='/engineer' element={<Engineer/>} />
            </Routes>
        </main>
    );
}
 
export default Crew