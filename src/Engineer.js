import anoushehAnsari from './starter-code/assets/crew/image-anousheh-ansari.png';
import { Link, useLocation } from 'react-router-dom';

const Engineer = () => {

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
                <img src={anoushehAnsari} alt="" className="crew-image" />
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
            <h5 className="crew-title">Engineer</h5>
            <h3 className="crew-name">Anousheh Ansari</h3>
            <p className="crew-about">
                Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                fly to the ISS, and the first Iranian in space. 
            </p>
        </section>
    );
}
 
export default Engineer;