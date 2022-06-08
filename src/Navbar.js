import "./Navbar.css";
import logo from "./starter-code/assets/shared/logo.svg";
import hamburger from "./starter-code/assets/shared/icon-hamburger.svg";

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <div className="nav-container">
                <img src={ logo } alt="space tourism logo" className="logo-icon"/>
                <button type="button" id="toggle-list">
                    <img src={hamburger} alt="Hamburger Icon" />
                </button>
            </div>
        </nav>

        
    );
}
 
export default Navbar;