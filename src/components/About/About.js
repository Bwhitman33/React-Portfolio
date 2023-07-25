import React from "react";
import frontman from "../../assets/pictures/atthemic.jpg";
import './About.css'

export default function Bio() {
    return (
        <section className="About-Me">
        <h2>About Me</h2>
        <div className="pic-container">
            <img src={frontman} alt="With Legions Vocalist- Me!" className="vocals" />
        </div>
            <p>
                Hello! My name is Brandon Whitman. I am a student in the Rutgers
                Coding Bootcamp, on a journey to broaden my software development
                knowledge. I am from Cape Cod, Massachusetts. I enjoy watching sports (Go Red Sox!),
                playing video games, and playing Dungeons & Dragons. I am an avid Heavy music enjoyer,
                and have been a vocalist for a couple bands. I am currently working in the Logistics industry, 
                at a family owned company called Achim Importing Co. 
            </p>
        </section>
    )
}