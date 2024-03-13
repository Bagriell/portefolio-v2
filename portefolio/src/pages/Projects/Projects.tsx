import React, { useEffect, useState } from "react";
import GridElemProject from "../../components/GridElemProject";
import "./Projects.css"
import Papa from 'papaparse';
const csv = require("./projects.csv")

interface Project {
    project_name: string,
    description: string,
    tags: string,
    link: string,
    tool: string
}
const csv_path = "/portefolio/public/project.csv"


const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    console.log(projects)

    useEffect(() => {
        load_projects();
    }, [])

    const render_projects = () => {

        return (
            projects.map(project => (
                <GridElemProject project_name={project.project_name}
                    description={project.description}
                    tags={project.tags}
                    img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Noun_Project_list_icon_119366_cc.svg/800px-Noun_Project_list_icon_119366_cc.svg.png"
                    link={project.link}
                    tool={project.tool}
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