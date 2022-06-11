import victorGlover from './starter-code/assets/crew/image-victor-glover.png';
import { Link, useLocation } from 'react-router-dom';

const Pilot = () => {

    const location = useLocation();
    
    let pathName = location.pathname;

    const crewLinks = [
        { id: 1, link: '/crew/commander', class: ''},
        { id: 2, link: '/crew/specialist', class: ''},
        { id: 3, link: '/crew/pilot', class: ''},
        { id: 4, link: '/crew/engineer', class: ''}
    ]

    crewLinks.forEach(crewLink => {
        if ( pathName.startsWith(crewLink.link) ) {
            crewLink.class = 'crew-list-items active-crew';
        }else {
            crewLink.class = 'crew-list-items inactive-crew';
        }
    });
    
    if (pathName === '/crew' || pathName === '/crew/'){
        crewLinks[0].class = 'crew-list-items active-crew';
    }

    return (  
        <section className="crew-section">
            <p className="crew-preview-text">
                <strong>02</strong>
                meet your crew
            </p>
            <div className="crew-image-wrapper">
                <img src={victorGlover} alt="" className="crew-image" />
            </div>
            <ul className='crew-list'>
                {
                    crewLinks.map((crewLink) => (
                        <li className={crewLink.class} key={crewLink.id}>
                            <Link to={crewLink.link} className="crew-link" ></Link>
                        </li>
                    ))
                }
            </ul>
            <h5 className="crew-title">Pilot</h5>
            <h3 className="crew-name">Victor Glover</h3>
            <p className="crew-about">
                Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                International Space Station. Glover is a commander in the U.S. Navy where 
                he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                station systems flight engineer. 
            </p>
        </section>
    );
}
 
export default Pilot;