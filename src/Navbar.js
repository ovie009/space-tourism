import "./Navbar.css";
import logo from "./starter-code/assets/shared/logo.svg";
import hamburger from "./starter-code/assets/shared/icon-hamburger.svg";
import close from './starter-code/assets/shared/icon-close.svg';
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
    const [slide, setSlide] = useState(false);
    
    const showSidebar = () => {
        let sideBar  = document.querySelector(".sidebar");
        let sideBarList  = document.querySelector(".sidebar-list");
        setSlide(!slide);
        sideBarList.style.visibility = slide ? 'visible' : 'hidden';
        // sideBar.style.width = slide ? 'block' : 'none';
        sideBar.style.width = slide ? '75vw' : '0vw';
        sideBar.style.left = slide ? '25vw' : '100vw';
        sideBar.style.backdropFilter = slide ? 'blur(30px)' : 'blur(0px)';
        console.log(slide);
    }

    return ( 
        <nav className="navbar">
            <div className="nav-container">
                <img src={ logo } alt="space tourism logo" className="logo-icon"/>
                <button type="button" className="toggle-list" onClick={showSidebar}>
                    <img src={hamburger} alt="Hamburger Icon" />
                </button>
                <ul className="nav-list">
                    <li className="nav-list-items active-page">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-list-items">
                        <Link to="/destination" className="nav-link">destination</Link>
                    </li>
                    <li className="nav-list-items">
                        <Link to="/crew" className="nav-link">crew</Link>
                    </li>
                    <li className="nav-list-items">
                        <Link to="/technology" className="nav-link">technology</Link>
                    </li>
                    <hr className="nav-line" />
                </ul>
            </div>
            <div className="sidebar">
                <div className="sidebar-container">
                    <div className="close-button-wrapper">
                        <button id="close-sidebar" onClick={showSidebar}>
                            <img src={close} alt="close icon" />
                        </button>
                    </div>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-items">
                            <Link to="/" className="side-link"> <strong>00</strong>  Home</Link>
                        </li>
                        <li className="sidebar-list-items">
                            <Link to="/destination" className="side-link"> <strong>01</strong> destination</Link>
                        </li>
                        <li className="sidebar-list-items">
                            <Link to="/crew" className="side-link"><strong>02</strong> crew</Link>
                        </li>
                        <li className="sidebar-list-items">
                            <Link to="/technology" className="side-link"><strong>03</strong> technology</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;