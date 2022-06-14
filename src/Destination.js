import './Destination.css';
import { useLocation, Outlet } from 'react-router-dom';
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
            <Outlet />
        </main>
    );
}
 
export default Destination