import React, { ReactElement } from "react";
import "./GridElem.css"
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
        <div className="grid-elem-container" onClick={(event) => {
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
            <div className="grid-elem-link">
                {link}
            </div>
        </div>
    )
}

export default GridElem;