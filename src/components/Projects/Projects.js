import React from "react";
import './Projects.css'

export default function Project({ project }) {

    const { title, deployedLink, github } = project;

    return (
        <div className="project-card" key={title}>
        <img
            src={(`../../assets/projects/${title}.jpg`)}
            alt={title}
            className="project-screencap"
        />
        <div>
            <a href={deployedLink}>{title}</a>{''}
            <a href={github}>Github Repo</a>
        </div>
        </div>

    );
}