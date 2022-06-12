import capsuleLandscape from './starter-code/assets/technology/image-space-capsule-landscape.jpg';
import capsulePortrait from './starter-code/assets/technology/image-space-capsule-portrait.jpg';
import { Link, useLocation } from "react-router-dom";
import useWindow from './useWindow';
import {useState} from "react"

const Capsule = () => {
    
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
                <img className='technology-image' src={mobile ? capsuleLandscape : capsulePortrait} alt="" style={mobile ? {objectPosition: "unset"} : {objectPosition: "100% 0"}} />
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
                Space capsule
            </h4>
            <p className="technology-paragraph">
                A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                you'll spend your time during the flight. It includes a space gym, cinema, 
                and plenty of other activities to keep you entertained.
            </p>

        </section>
    );
}
 
export default Capsule;