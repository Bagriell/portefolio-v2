import React, { ReactElement } from "react";
import "./About.css"

const About: React.FC = (): ReactElement => (
    <div className="about-main-container">
        <h1>
            About
        </h1>
        <p className="presentation">
            Hello dear visitor 👋! <br />
            I'm Gabriel and I'm software developer currently living in Montpellier, France.<br />
            Tech enthusiast with a Python syndrom and always looking for new projects.<br />
            I have some work, personal and entrepreuneurship experiences in web development, mobile, and I'm also a huge AI enthousiast.<br />
            My bests weapons are my curiosity, obstination and versatility and also my taste for solving problems.<br />

            Feel free to contact me if you want to build something together.
        </p>
    </div>
)

export default About;