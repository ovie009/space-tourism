import './Sidebar.css';
import close from './starter-code/assets/shared/icon-close.svg';
// import { Link } from "react-router-dom";

const Sidebar = () => {
    return ( 
        <nav className="sidebar slide-left">
            <div className="sidebar-container">
                <div className="close-button-wrapper">
                    <button id="close-sidebar">
                        <img src={close} alt="close icon" />
                    </button>
                </div>
                <ul className="sidebar-list">
                    <li className="sidebar-list-items">
                        <a href="/" className="side-link"> <strong>00</strong>  Home</a>
                        {/* <Link to="/" className="side-link"> 00 Home</Link> */}
                    </li>
                    <li className="sidebar-list-items">
                        <a href="/destination" className="side-link"> <strong>01</strong> destination</a>
                        {/* <Link to="/destination" className="side-link"> 01 destination</Link> */}
                    </li>
                    <li className="sidebar-list-items">
                        <a href="/crew" className="side-link"><strong>02</strong> crew</a>
                        {/* <Link to="/crew" className="side-link"> 02 crew</Link> */}
                    </li>
                    <li className="sidebar-list-items">
                        <a href="/technology" className="side-link"><strong>03</strong> technology</a>
                        {/* <Link to="/technology" className="side-link"> 03 technology</Link> */}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Sidebar;