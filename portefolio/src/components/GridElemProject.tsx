import { ReactElement } from "react";

interface GridElemProjectProps {
    img: any;
    link: string;
    parag: string
}

function GridElemProject({ img, link, parag }: GridElemProjectProps): ReactElement {
    return (
        <div className="grid-elem-project-container">
            <img src={img} alt="project image"></img>
            <p>{parag}</p>
        </div >
    )
}

export default GridElemProject;