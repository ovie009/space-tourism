import "./Navbar.css";
import logo from "./starter-code/assets/shared/logo.svg";
import hamburger from "./starter-code/assets/shared/icon-hamburger.svg";
import close from './starter-code/assets/shared/icon-close.svg';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
    
    const [slide, setSlide] = useState(false);
    
    const location = useLocation();
    
    let pathName = location.pathname;

    useEffect(() => {
        // let forwardSlashCount = pathName.split('/').length - 1;
        // if (window.innerWidth < 768 && forwardSlashCount <= 1) {
        //     console.log('pathchanged');
        //     showSidebar();
        // }
        console.log('path changed');
    }, [pathName])

    const navLinks = [
        { id: 1, link: '/home', text: 'Home', class: '', number: '00'},
        { id: 2, link: '/destination', text: 'destination', class: '', number: '01'},
        { id: 3, link: '/crew', text: 'crew', class: '', number: '02'},
        { id: 4, link: '/technology', text: 'technology', class: '', number: '03'}
    ]

    navLinks.forEach(navLink => {
        if ( pathName.startsWith(navLink.link) ) {
            navLink.class = 'nav-list-items active-page';
        } else {
            navLink.class = 'nav-list-items inactive-page';
        }
    });
    
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
                <Link to="/home/">
                    <img src={ logo } alt="space tourism logo" className="logo-icon"/>
                </Link>
                <button type="button" className="toggle-list" onClick={showSidebar}>
                    <img src={hamburger} alt="Hamburger Icon" />
                </button>
                <ul className="nav-list">
                    {
                        navLinks.map((navLink) => (
                            <li className={navLink.class} key={navLink.id}>
                                <Link to={navLink.link} className="nav-link">
                                    <strong>
                                        {navLink.number}
                                    </strong>
                                    {navLink.text}
                                </Link>
                            </li>
                        ))
                    }
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