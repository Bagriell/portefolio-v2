import React, { useEffect, useState } from "react";
import GridElemProject from "../../components/GridElemProject";
import "./Projects.css"
import Papa from 'papaparse';
const csv = require("./projects.csv")

interface Project {
    project_name: string,
    description: string,
    img?: string,
    tags: string,
    link: string,
    tool: string
}
const default_img = "https://cdn.textstudio.com/output/sample/normal/9/1/6/5/project-logo-860-5619.png"


const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        load_projects();
    }, [])

    const render_projects = () => {

        return (
            projects.map(project => (
                <GridElemProject project_name={project.project_name}
                    description={project.description}
                    tags={project.tags}
                    img={project.img ? project.img : default_img}
                    link={project.link}
                    tool={project.tool}
                    key={project.project_name}
                ></GridElemProject>
            ))
        )
    };

    const load_projects = () => {
        Papa.parse(csv, {
            download: true,
            header: true,
            complete: (input: any) => {
                setProjects(input.data)
            },
            error: (error, file) => {
                console.log("error while parsing csv", error, file)
            }
        })
    };


    return (
    <div>
        <h1>Projects</h1>
        <div className="project-container">
                {
                    render_projects()
                }
        </div>
    </div >
)
}

export default Projects;