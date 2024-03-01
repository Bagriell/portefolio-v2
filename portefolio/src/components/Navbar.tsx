import { Link, Route } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import "./Navbar.css"


function Navbar() {

    return (
        <nav className="navbar">
            <ul className="navitems">
                <li className="navelem icon">
                    <div>
                        <Link to="/" className="navlink">
                            <HomeIcon fontSize="large"></HomeIcon>
                        </Link>
                    </div>
                </li>
                <li className="navelem">
                    <div className="projects" >
                        <Link to="/projects" className="navlink">
                            projects
                        </Link>
                    </div>
                </li>
                <li className="navelem">
                    <div className="contacts" >
                        <Link to="/contacts" className="navlink">
                            contacts
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;