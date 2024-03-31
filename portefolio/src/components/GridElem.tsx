import React, { ReactElement } from "react";
import styles from "./GridElem.module.css"
import Snackbar from '@mui/material/Snackbar';


interface GridElemProps {
    icon: ReactElement;
    link: string;
}

function GridElem({ icon, link }: GridElemProps): ReactElement {
    const [openToast, setOpenToast] = React.useState(false);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenToast(false);
    };

    return (
        <div className={styles.gridElemContainer} onClick={(event) => {
            navigator.clipboard.writeText(link)
            setOpenToast(true)
        }}>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={openToast}
                autoHideDuration={500}
                onClose={handleClose}
                message="copied"
            />
            <div>
                {icon}
            </div>
            <div className={styles.gridElemLink}>
                {link}
            </div>
        </div>
    )
}

export default GridElem;