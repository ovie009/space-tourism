import './Technology.css'
import { useLocation, Outlet } from 'react-router-dom';
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
            <Outlet />
        </main>
    );
}
 
export default Technology