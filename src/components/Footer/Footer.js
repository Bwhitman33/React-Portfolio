import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="footer">
              <h3>Follow My Socials</h3>
                <a href="https://github.com/Bwhitman33"
                   className= "github social">
                   <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/brandon-whitman-b91b03278/"
                   className= "linkedin social">
                   <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://twitter.com/prismeyes33"
                   className= "twitter social">
                   <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                
        </footer>
    );
}