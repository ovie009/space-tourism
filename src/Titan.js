import { Link, useLocation } from 'react-router-dom';
import titanImg from "./starter-code/assets/destination/image-titan.png";

const Titan = () => {

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
                    <img className='destiantion-image' src={titanImg} alt="titan imaage" />
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
                <h1 className='destination-heading'>TITAN</h1>
                <p className="destination-paragragh">
                    
                    The only moon known to have a dense atmosphere other than Earth, Titan 
                    is a home away from home (just a few hundred degrees colder!). As a 
                    bonus, you get striking views of the Rings of Saturn.

                </p>
                <hr className="destination-line" />
                <div className="destination-data">
                    <div className="destination-distance">
                        <p>Avg. distance</p>
                        <h3>1.6 bil. km</h3>
                    </div>
                    <div className="destination-time">
                        <p>Est. travel time</p>
                        <h3>7 years</h3>
                    </div>
                </div>

            </div>
        </section>
    );
}
 
export default Titan;