import React from "react";

import "./page-header.styles.scss"

export const PageHeader = ({title, subTitle, text}) => (
    <div className="page-header">
        <div className="logo-container">
            <p>Team Logo</p>
        </div>
        <div>
            <header className="header-content">
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
            </header>
            <div className="text">
                {text.map((t, index) => <p key={index}>{t}</p>)}
            </div>
        </div>
    </div>
);
