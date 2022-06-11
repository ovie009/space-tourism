import './Crew.css'
import { Routes, Route } from 'react-router-dom';
import Commander from './Commander';
import Specialist from './Specialist';
import Pilot from './Pilot';
import Engineer from './Engineer';

const Crew = () => {
    return ( 
        <main className="crew">
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