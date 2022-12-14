// import { NavLink } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {

    return (
        <nav className="nav-container">

            <Link to="#home" smooth className="nav-item"> 
            <li > DM </li>
            </Link>
            {/* <Link to="#home" smooth> 
            <li className="nav-item"> 
            Home 
            </li>

            </Link> */}
         
            <Link to="#about" smooth className="nav-item"> 
            <li>
               About  </li> 
            </Link>

            <Link to="#project-section" smooth className="nav-item"> 
            <li > Projects</li>
            </Link>
            <Link to="#contact-section" smooth> 
            <li className="nav-item"> Contact </li>
            </Link>
            <button className="call-to-action"> RESUME </button>


        </nav>



    )

}

export default Header