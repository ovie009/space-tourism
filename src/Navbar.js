import "./Navbar.css";
import logo from "./starter-code/assets/shared/logo.svg";
import hamburger from "./starter-code/assets/shared/icon-hamburger.svg";
// import styled from 'styled-components';
import close from './starter-code/assets/shared/icon-close.svg';
import { useState } from "react";

const Navbar = () => {
    
    const [slide, setSlide] = useState(false);
    
    const showSidebar = () => {
        let sideBar  = document.querySelector(".sidebar");
        let sideBarList  = document.querySelector(".sidebar-list");
        setSlide(!slide);
        sideBarList.style.visibility = slide ? 'visible' : 'hidden';
        sideBar.style.width = slide ? '75vw' : '0vw';
        sideBar.style.left = slide ? '25vw' : '100vw';
        sideBar.style.backdropFilter = slide ? 'blur(30px)' : 'blur(0px)';
        // console.log(slide);
    }

    return ( 
        <nav className="navbar">
            <div className="nav-container">
                <img src={ logo } alt="space tourism logo" className="logo-icon"/>
                <button type="button" id="toggle-list" onClick={showSidebar}>
                    <img src={hamburger} alt="Hamburger Icon" />
                </button>
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
            </div>
        </nav>
    );
}
 
export default Navbar;