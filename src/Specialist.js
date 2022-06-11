import markShuttleworth from './starter-code/assets/crew/image-mark-shuttleworth.png';
import { Link, useLocation } from 'react-router-dom';

const Specialist = () => {

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
                <img src={markShuttleworth} alt="" className="crew-image" />
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
            <h5 className="crew-title">Mission Specialist</h5>
            <h3 className="crew-name">Mark Shuttleworth</h3>
            <p className="crew-about">
                Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                African to travel to space as a space tourist.
            </p>
        </section>
    );
}
 
export default Specialist;