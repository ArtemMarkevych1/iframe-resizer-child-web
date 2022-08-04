import React from "react";
import {Link} from "react-router-dom";

import "./next-arrow.styles.scss"

export const NextArrow = ({to}) => (
    <div className="next-arrow">
        <Link to={to}>&#8594;</Link>
    </div>
);
