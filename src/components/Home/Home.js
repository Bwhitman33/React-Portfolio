import React from "react";
import Selfie from "../../assets/pictures/selfie.jpg";
import './Home.css'

export default function Home() {
    return (
        <section className="Home">
            <div className="img-cont">
                <img src={Selfie} alt="Me!" className="selfie" />
            </div>
            <div>
                <h2>
                    Proficient Technologies
                </h2>
                <ul className= "Technologies">
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        Git
                    </li>
                    <li>
                        Javascript
                    </li>
                    <li>
                        Bootstrap
                    </li>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        SQL
                    </li>
                    <li>
                        Mongo
                    </li>
                    <li>
                        React
                    </li>
                </ul>
            </div>
        </section>
    )
}