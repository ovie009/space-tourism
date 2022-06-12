import moonImg from "./starter-code/assets/destination/image-moon.png";
import { useLocation, Link } from "react-router-dom";

const Moon = () => {

    const location = useLocation();
    
    let pathName = location.pathname;

    const destinationLinks = [
        { id: 1, link: '/destination/moon', text: 'moon', class: ''},
        { id: 2, link: '/destination/mars', text: 'mars', class: ''},
        { id: 3, link: '/destination/europa', text: 'europa', class: ''},
        { id: 4, link: '/destination/titan', text: 'titan', class: ''}
    ]

    destinationLinks.forEach(destinationLink => {
        if ( pathName.startsWith(destinationLink.link) ) {
            destinationLink.class = 'destination-list-items active-page';
        }else {
            destinationLink.class = 'destination-list-items inactive-page';
        }
    });
    
    if (pathName === '/destination' || pathName === '/destination/'){
        destinationLinks[0].class = 'destination-list-items active-page';
    }
    return (  
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
            <div className="destination-text-wrapper">
                <ul className="destination-list">
                    {
                        destinationLinks.map((destinationLink) => (
                            <li className={destinationLink.class} key={destinationLink.id}>
                                <Link to={destinationLink.link}>{destinationLink.text}</Link>
                            </li>
                        ))
                    }
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
    );
}
 
export default Moon;