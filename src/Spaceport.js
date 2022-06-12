import spaceportLandscape from './starter-code/assets/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from './starter-code/assets/technology/image-spaceport-portrait.jpg';
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import useWindow from './useWindow';

const Spaceport = () => {

    const size =  useWindow();
    
    const [mobile, setMobile] = useState(true);
    
    const handleScreenWidth = () => {
        
        const screenWidth = size.dynamicWidth;

        if(screenWidth >= 1024){
            setMobile(false);
        }

    }

    const location = useLocation();
    
    let pathName = location.pathname;

    const technologyLinks = [
        { id: 1, link: '/technology/vehicle', text: '1', class: ''},
        { id: 2, link: '/technology/spaceport', text: '2', class: ''},
        { id: 3, link: '/technology/capsule', text: '3', class: ''}
    ]

    technologyLinks.forEach(technologyLink => {
        if ( pathName.startsWith(technologyLink.link) ) {
            technologyLink.class = 'technology-link active-technology';
        }else {
            technologyLink.class = 'technology-link inactive-technology';
        }
    });
    
    if (pathName === '/technology' || pathName === '/technology/'){
        technologyLinks[0].class = 'technology-link active-technology';
    }

    return (  
        <section onLoad={handleScreenWidth} className="technology-section">
            
            <p className="technology-preview">
                <strong>03</strong>
                space launch 101
            </p>
            <div className="technology-image-wrapper">
                <img className='technology-image' src={mobile ? spaceportLandscape : spaceportPortrait} alt="" />
            </div>
            <ul className="technology-list">
                {
                    technologyLinks.map((technologyLink) => (
                        <li className="technology-items" key={technologyLink.id}>
                            <Link to={technologyLink.link} className={technologyLink.class}>{technologyLink.text}</Link>
                        </li>
                    ))
                }
            </ul>
            <p className="technology-subheading">
                the terminology...
            </p>
            <h4 className="technology-heading">
                Spaceport
            </h4>
            <p className="technology-paragraph">
                A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                by analogy to the seaport for ships or airport for aircraft. Based in the 
                famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                of the Earth’s rotation for launch.
            </p>

        </section>
    );
}
 
export default Spaceport;