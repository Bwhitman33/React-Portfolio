import React from "react";
import './Projects.css'


export default function Project({ title, image, deployedLink, github }) {

    return (
        <div className="project-card" key={title}>
            <img
                src={image}
                alt={title}
                className="project-screencap"
                width="350px"
                height="350px"
            />
            <div>
                <a href={deployedLink}>{title}</a>{''} <br></br>
                <a href={github}>Github Repo</a>
            </div>
        </div>

    );
}