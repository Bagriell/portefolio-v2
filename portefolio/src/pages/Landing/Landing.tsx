import React, { ReactElement } from "react";
import styles from "./Landing.module.css"
import { Link } from "react-router-dom";

const Landing = (): ReactElement => (
    <div className={styles.container}>
        <h1>
            About
        </h1>
        <div className={styles.bodyContainer}>
            <img className={styles.profileImg} src={`${process.env.PUBLIC_URL}/img/my_pic.png`} alt="ugly me" height={200} width={200} />
            <h2>Gabriel Buetas</h2>
            <p className={styles.presentation}>
                Hello dear visitor 👋! <br />
                I'm Gabriel and I'm software developer currently living in Montpellier, France.
                Tech enthusiast with a Python syndrom and always looking for new projects.
                I have some work, personal and entrepreuneurship experiences in web development, mobile, and I'm also a huge AI enthousiast.
                My bests weapons are my curiosity, obstination and versatility and also my taste for solving problems.<br /><br />
                Feel free to <Link to="/contacts">contact me</Link> if you want to build something together.
        </p>
    </div>
    </div>
)

export default Landing;