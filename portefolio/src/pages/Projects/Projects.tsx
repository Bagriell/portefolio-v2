import React from "react";
import GridElemProject from "../../components/GridElemProject";
import "./Projects.css"


const Projects: React.FC = () => (
    <div>
        <h1>Projects</h1>
        <div className="project-container">
            <GridElemProject img="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" link="https://fr.wiktionary.org/wiki/cc"
                parag="blalglefzlflzelfkeflzklflfklkfkelz,efklefklfle"
            ></GridElemProject>
        </div>
    </div >
)

export default Projects;