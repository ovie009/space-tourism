import { Link } from 'react-router-dom';
import marsImg from "./starter-code/assets/destination/image-mars.png";
import { useLocation } from "react-router-dom";

const Mars = () => {

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
                    <img className='destiantion-image' src={marsImg} alt="mars imaage" />
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
                <h1 className='destination-heading'>MARS</h1>
                <p className="destination-paragragh">
                    
                    Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                    the tallest planetary mountain in our solar system. It’s two and a half times 
                    the size of Everest!


                </p>
                <hr className="destination-line" />
                <div className="destination-data">
                    <div className="destination-distance">
                        <p>Avg. distance</p>
                        <h3>225 mil. km</h3>
                    </div>
                    <div className="destination-time">
                        <p>Est. travel time</p>
                        <h3>9 months</h3>
                    </div>
                </div>

            </div>
        </section>
    );
}
 
export default Mars;