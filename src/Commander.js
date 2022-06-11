import douglasHurley from './starter-code/assets/crew/image-douglas-hurley.png';
import { Link, useLocation } from 'react-router-dom';

const Commander = () => {

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
                <img src={douglasHurley} alt="" className="crew-image" />
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
            <h5 className="crew-title">commander</h5>
            <h3 className="crew-name">Douglas Hurley</h3>
            <p className="crew-about">
                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                and former NASA astronaut. He launched into space for the third time as 
                commander of Crew Dragon Demo-2.
            </p>
        </section>
    );
}
 
export default Commander;