import './Technology.css'
import vehicleImage from './starter-code/assets/technology/image-launch-vehicle-landscape.jpg';
import { Link } from "react-router-dom";

const Technology = () => {
    return ( 
        <main className="technology">
            <section className="technology-section">
                <p className="technology-preview">
                    <strong>03</strong>
                    space laung 101
                </p>
                <div className="technology-image-wrapper">
                    <img className='technology-image' src={vehicleImage} alt="" />
                </div>
                <ul className="technology-list">
                    <li className="technology-items">
                        <Link to="/vehicle">1</Link>
                    </li>
                    <li className="technology-items">
                        <Link to="/spaceport">2</Link>
                    </li>
                    <li className="technology-items">
                        <Link to="/capsule">3</Link>
                    </li>
                </ul>
                <h4 className="technology-subheading">
                    the terminology...
                </h4>
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