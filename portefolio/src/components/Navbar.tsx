import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import styles from "./Navbar.module.css"


function Navbar() {

    return (
        <nav className={styles.navbar}>
            <ul className={styles.navitems}>
                <li className={`${styles.navelem} ${styles.icon}`}>
                    <div>
                        <Link to="/" className={styles.navlink}>
                            <HomeIcon fontSize="large"></HomeIcon>
                        </Link>
                    </div>
                </li>
                <li className={styles.navelem}>
                    <div className={styles.projects} >
                        <Link to="/projects" className={styles.navlink}>
                            projects
                        </Link>
                    </div>
                </li>
                <li className={styles.navelem}>
                    <div className={styles.contacts} >
                        <Link to="/contacts" className={styles.navlink}>
                            contacts
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;