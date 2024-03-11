import { ReactElement } from "react";
import "./GridElemProject.css"

interface GridElemProjectProps {
    project_name: string;
    description: string;
    tags: string[];
    img: any;
    link: string;
    tool: string
}

function GridElemProject({ project_name, description, tags, img, link, tool }: GridElemProjectProps): ReactElement {
    return (
        <div className="grid-elem-project-container">
            <img src={img} alt="project image" width={200}></img>
            <div>{project_name}</div>
            <div>{tags}</div>
            <div>{tool}</div>
            <div>{link}</div>
            <p>{description}</p>
        </div >
    )
}

export default GridElemProject;