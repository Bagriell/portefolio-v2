import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Projects from "../pages/Projects";
import About from "../pages/About";
import { BrowserRouter as Router } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import "./Navbar.css"


function Navbar() {
    // const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <nav>
            <ul>
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
                    <div className="about">
                        <Link to="/about" className="navlink">
                            about
                        </Link>
                    </div>
                </li>
                <li className="navelem">
                    <div className="contacts" >
                        <Link to="/contacts" className="navlink">
                            contact me
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;