import React from "react";
import {Link} from "react-router-dom";

import "./back-arrow.styles.scss"

export const BackArrow = ({to}) => (
    <div className="back-arrow">
        <Link to={to}>&#8592;</Link>
    </div>
);
