import React from "react";

import "./button.styles.scss"

export const Button = ({text, onClick, fontSize}) => (
    <button className="button-wrap" onClick={onClick} fontSize={fontSize}>
        {text}
    </button>
);
