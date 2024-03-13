import { ReactElement } from "react";
import "./GridElemProject.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface GridElemProjectProps {
    project_name: string;
    description: string;
    tags: string;
    img: any;
    link: string;
    tool: string
}

function GridElemProject({ project_name, description, tags, img, link, tool }: GridElemProjectProps): ReactElement {
    const render_tags = (label: string) => {
        const labels = label.split(",")

        return (
            labels.map((elem) => (
                <Chip label={elem} size="small" variant="outlined" color="primary" />
            ))
        )

    }

    return (
        <div className="grid-elem-project-container">
            <img src={img} alt="project image" width={200}></img>
            <div>{project_name}</div>
            <Stack>
                {render_tags(tags)}
            </Stack>
            <div>{tool}</div>
            <div>{link}</div>
            <p>{description}</p>
        </div >
    )
}

export default GridElemProject;