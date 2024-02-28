import React, { ReactElement } from "react";
import "./GridElem.css"

interface GridElemProps {
    icon: ReactElement;
    link: string;
    className?: string;
}

function GridElem({ icon, link, className }: GridElemProps): ReactElement {

    return (
        <div className="grid-elem-container">
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