import React, { ReactElement } from "react";
import styles from "./Contacts.module.css"
import GridElem from "../../components/GridElem";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contacts = (): ReactElement => (
    <div>
        <h1>Contacts</h1>
        <div className={styles.container}>
            <GridElem icon={<LinkedInIcon />} link="https://www.linkedin.com/in/gabriel-buetas-7a79031b9/"></GridElem>
            <GridElem icon={<SmartphoneIcon />} link="06 74 28 07 39"></GridElem>
            <GridElem icon={<EmailIcon />} link="gabriel.buetas@gmail.com"></GridElem>
            <GridElem icon={<GitHubIcon />} link="https://github.com/Bagriell"></GridElem>
        </div>
    </div >
)

export default Contacts;