import './Crew.css'
import douglasHurley from './starter-code/assets/crew/image-douglas-hurley.png';
import { Link } from 'react-router-dom';

const Crew = () => {
    return ( 
        <main className="crew">
            <section className="crew-section">
                <p className="crew-preview-text">
                    <strong>02</strong>
                    meet your crew
                </p>
                <div className="crew-image-wrapper">
                    <img src={douglasHurley} alt="" />
                </div>
                <ul className='crew-list'>
                    <li className="crew-list-items">
                        <link rel="stylesheet" href="/crew/a" className="crew-link active-crew" />
                    </li>
                    <li className="crew-list-items">
                        <link rel="stylesheet" href="/crew/a" className="crew-link inactive-crew" />
                    </li>
                    <li className="crew-list-items">
                        <link rel="stylesheet" href="/crew/a" className="crew-link inactive-crew" />
                    </li>
                    <li className="crew-list-items">
                        <link rel="stylesheet" href="/crew/a" className="crew-link inactive-crew" />
                    </li>
                </ul>
                <h5 className="crew-title">
                    commander
                </h5>
                <h3 className="crew-name">
                    Douglas Hurley
                </h3>
                <p className="crew-about">
                    Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                    and former NASA astronaut. He launched into space for the third time as 
                    commander of Crew Dragon Demo-2.
                </p>
            </section>
        </main>
    );
}
 
export default Crew