import { ReactElement } from "react";
import "./GridElemProject.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface GridElemProjectProps {
    project_name: string;
    description: string;
    tags: string;
    img?: string;
    link: string;
    tool: string
}

function GridElemProject({ project_name, description, tags, img, link, tool }: GridElemProjectProps): ReactElement {
    const render_tags = (label: string) => {
        const labels = label.split(",");

        return (
            labels.map((elem) => (
                <Chip label={elem} size="small" variant="outlined" color="primary" className="chips-label" key={elem + Math.random()} />
            ))
        )

    }

    const render_tools = (tool: string) => {
        const tools = tool.split(",");

        return (
            tools.map((elem) => (
                <Chip label={elem} size="small" variant="outlined" color="error" className="chips-label" key={elem + Math.random()} />
            ))
        )
    }

    return (
        <div className="grid-elem-project-container" onClick={() => { window.location.href = link }}>
            <img src={img} alt="project cover" width={"auto"} height={"100px"} className="grid-elem-img"></img>
            <div className="grid-elem-project-title">{project_name}</div>
            <Stack direction="row" justifyContent="center">
                {render_tags(tags)}
            </Stack>
            <Stack direction={"row"} justifyContent={"center"}>
                {render_tools(tool)}
            </Stack>
            <p className="decription">{description}</p>
        </div >
    )
}

export default GridElemProject;