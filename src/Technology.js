import './Technology.css'
import vehicleLandscape from './starter-code/assets/technology/image-launch-vehicle-landscape.jpg';
import vehiclePortrait from './starter-code/assets/technology/image-launch-vehicle-portrait.jpg';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Technology = () => {


    const [mobile, setMobile] = useState(true);

    const screenWidth = () => {
        if ( screenWidth >= 1024) {
            setMobile(false);
        }
    }

    console.log(mobile)

    screenWidth();

    return ( 
        <main className="technology">
            <section className="technology-section">
                
                <p className="technology-preview">
                    <strong>03</strong>
                    space launch 101
                </p>
                <div className="technology-image-wrapper">
                    <img className='technology-image' src={mobile ? vehiclePortrait : vehicleLandscape} alt="" />
                </div>
                <ul className="technology-list">
                    <li className="technology-items">
                        <Link className='technology-link active-technology' to="/vehicle">1</Link>
                    </li>
                    <li className="technology-items">
                        <Link className='technology-link inactive-technology' to="/spaceport">2</Link>
                    </li>
                    <li className="technology-items">
                        <Link className='technology-link inactive-technology' to="/capsule">3</Link>
                    </li>
                </ul>
                <p className="technology-subheading">
                    the terminology...
                </p>
                <h4 className="technology-heading">
                    launch vehicle
                </h4>
                <p className="technology-paragraph">
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                    it's quite an awe-inspiring sight on the launch pad!
                </p>

            </section>
        </main>
    );
}
 
export default Technology