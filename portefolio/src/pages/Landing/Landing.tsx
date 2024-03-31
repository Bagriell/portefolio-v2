import React, { ReactElement } from "react";
import styles from "./Landing.module.css"

const Landing: React.FC = (): ReactElement => (
    <div className="landing-main-container">
        <h1>
            About
        </h1>
        <p className={styles.presentation}>
            Hello dear visitor 👋! <br />
            I'm Gabriel and I'm software developer currently living in Montpellier, France.
            Tech enthusiast with a Python syndrom and always looking for new projects.
            I have some work, personal and entrepreuneurship experiences in web development, mobile, and I'm also a huge AI enthousiast.
            My bests weapons are my curiosity, obstination and versatility and also my taste for solving problems.<br />
            Feel free to contact me if you want to build something together.
        </p>
        <p>

        </p>
    </div>
)

export default Landing;