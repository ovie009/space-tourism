import './Crew.css'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Commander from './Commander';
import Specialist from './Specialist';
import Pilot from './Pilot';
import Engineer from './Engineer';
import { useSwipeable } from 'react-swipeable';

const Crew = () => {

    const history = useNavigate();

    const location = useLocation();

    let pathName = location.pathname;

    const linkArray = [
        '/crew/commander',
        '/crew/specialist',
        '/crew/pilot',
        '/crew/engineer'
    ];
    console.log(pathName)

    const handlers = useSwipeable({
        onSwiped: (e) => {
            let currentPathIndex = linkArray.indexOf(pathName);
            let targetPathIndex;
            let swipeDirection = e.dir;
            if (pathName === '/crew') {
                pathName = '/crew/commander';
            }
            // console.log(pathName)
            // console.log(e.dir)

            // console.log("🚀 ~ file: Crew.js ~ line 34 ~ Crew ~ currentPageIndex", currentPathIndex)

            if (swipeDirection === 'Left') {
                targetPathIndex = currentPathIndex + 1;
                if (targetPathIndex === 4) {
                    targetPathIndex = 0;
                }
                
            } else {
                targetPathIndex = currentPathIndex - 1;
                if (targetPathIndex === -1) {
                    targetPathIndex = 0;
                }
            }
            history(linkArray[targetPathIndex]);
        }
    });


    // swipeHandlers();
    
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