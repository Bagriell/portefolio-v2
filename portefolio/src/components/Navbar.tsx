import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Projects from "../pages/Projects";
import About from "../pages/About";
import { BrowserRouter as Router } from "react-router-dom";
import "./Navbar.css"


function Navbar() {
    // const [selectedIndex, setSelectedIndex] = useState(-1)

    return (
        <nav>
            <ul>
                <li>
                    <div className="landing">
                        <Link to="/">
                            icon
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="about">
                        <Link to="/about">
                            about
                        </Link>
                    </div>
                </li>
                <li>
                    <div className="projects">
                        <Link to="/projects">
                            project
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;