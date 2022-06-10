import './Destination.css';
import moonImg from "./starter-code/assets/destination/image-moon.png";
import { Link } from 'react-router-dom';

const Destination = () => {
    return ( 
        <main className="destination">
            <section className="destination-section">
                <div className="preview-wrapper">
                    <p className='destination-preview-text'>
                        01 
                        <span>
                            pick your destination
                        </span> 
                    </p>
                    <div className="destination-image-wrapper">
                        <img className='destiantion-image' src={moonImg} alt="moon imaage" />
                    </div>
                </div>
                <div className="text-wrapper">
                    <ul className="destination-list">
                        <li className="destination-list-items active-page">
                            <Link to="/destination/">moon</Link>
                        </li>
                        <li className="destination-list-items">
                            <Link to="/destination/mars">mars</Link>
                        </li>
                        <li className="destination-list-items">
                            <Link to="/destination/europa">europa</Link>
                        </li>
                        <li className="destination-list-items">
                            <Link to="/destination/titan">titan</Link>
                        </li>
                    </ul>
                    <h1 className='destination-heading'>MOON</h1>
                    <p className="destination-paragragh">
                        
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                        regain perspective and come back refreshed. While you’re there, take in some history 
                        by visiting the Luna 2 and Apollo 711 landing sites.

                    </p>
                    <hr className="destination-line" />
                    <div className="destination-data">
                        <div className="destination-distance">
                            <p>Avg. distance</p>
                            <h3>384,400 KM</h3>
                        </div>
                        <div className="destination-time">
                            <p>Est. travel time</p>
                            <h3>3 days</h3>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
 
export default Destination