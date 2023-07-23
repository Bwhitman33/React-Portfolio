import React, { useState } from "react";
import Project from "../Projects/Projects";
import './Portfolio.css'
import SCREENSHOTS from "../../assets/projects/index.js";


export default function Portfolio() {
    const [showcase] =  useState([
        {
            title: 'SightsAndSounds',
            image: SCREENSHOTS.SightsAndSounds,
            deployedLink: "https://reallyawesomename.github.io/room-for-activities/",
            github: "https://github.com/ReallyAwesomeName/room-for-activities",
        },
        {
            title: 'AchievementUnlocked',
            image: SCREENSHOTS.AchievementUnlocked,
            deployedLink: "https://thawing-cove-75959.herokuapp.com/",
            github: "https://github.com/Greivin13/AchievementUnlocked",
        },
        {
            title: 'NoteTakingWebApp',
            image: SCREENSHOTS.NoteTakingWebApp,
            deployedLink: "https://note-taking-webapp.herokuapp.com/",
            github: "https://github.com/Bwhitman33/Note-Taker-App",
        },
        {
            title: 'PasswordGenerator',
            image: SCREENSHOTS.PasswordGenerator,
            deployedLink: "https://bwhitman33.github.io/Random-Password-Generator/",
            github: "https://github.com/Bwhitman33/Random-Password-Generator",
        },
        {
            title: 'TechBlogSite',
            image: SCREENSHOTS.TechBlogSite,
            deployedLink: "https://techblogsite-d7f167b49389.herokuapp.com/",
            github: "https://github.com/Bwhitman33/Tech-Blog-Site",
        },
        {
            title: 'WorkdayScheduler',
            image: SCREENSHOTS.WorkDayScheduler,
            deployedLink: "https://bwhitman33.github.io/Work-Day-Scheduler/",
            github: "https://github.com/Bwhitman33/Work-Day-Scheduler",
        },
    ]);

    return (
        <section className="project-space">
            <h2>My Works Showcase</h2>
                {showcase.map((project, index) => (
                <Project key={index} {...project} />
                ))}
        </section>
    );
}