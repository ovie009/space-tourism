import './Crew.css'
import { useLocation, Outlet } from 'react-router-dom';
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
            <Outlet />

        </main>
    );
}
 
export default Crew