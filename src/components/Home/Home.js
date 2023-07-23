import React from "react";
import Selfie from "../../assets/pictures/selfie.jpg";
import './Home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHtml5, 
    faCss3,
    faGit,
    faJs,
    faBootstrap,
    faNodeJs,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <section className="Home">
            <div className="img-cont">
                <img src={Selfie} alt="Me!" className="selfie" />
            </div>
            <div className="tech-list">
                <h2>
                    Proficient Technologies
                </h2>
                <ul className= "Technologies">
                    <li>
                        <FontAwesomeIcon icon={faHtml5} color="#e34f26" size="4x" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCss3} color="#1680C0" size="4x" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGit} color="#333" size="4x" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faJs} color="#F0DB4F" size="4x" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBootstrap} color="#514999" size="4x" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faNodeJs} color="#529d42" size="4x" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faDatabase} color="#5d84f2" size="4x" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faReact} color="#00d7fe" size="4x" />
                    </li>
                </ul>
            </div>
        </section>
    )
}