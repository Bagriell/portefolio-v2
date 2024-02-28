import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import Projects from "../pages/Projects/Projects";
import About from "../pages/Competencies/Competencies";
import { BrowserRouter as Router } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import "./Navbar.css"


function Navbar() {

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