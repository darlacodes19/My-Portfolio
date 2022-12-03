// import { NavLink } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {

    return (
        <nav className="nav-container">


            <li className="nav-item"> DM </li>
            <Link to={"/"}> 
            <li className="nav-item"> 
            Home 
            </li>

            </Link>
         
            <Link to={".about-section"}> 
            <li className="nav-item">
               About  </li> 
            </Link>
            <li className="nav-item"> Projects</li>
            <button className="nav-item call-to-action"> Contact </button>


        </nav>



    )

}

export default Header