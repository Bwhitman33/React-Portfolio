import React from "react";
import './Projects.css'
import SCREENSHOTS from "../../assets/projects";

export default function Project({ title, image, deployedLink, github }) {

    // const { title, deployedLink, github } = project;

    return (
        <div className="project-card" key={title}>
            <img
                src={image}
                alt={title}
                className="project-screencap"
            />
            <div>
                <a href={deployedLink}>{title}</a>{''} <br></br>
                <a href={github}>Github Repo</a>
            </div>
        </div>

    );
}