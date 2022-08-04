import React from "react";
import {BackArrow, NextArrow} from "../../components";
import {WEB_TEAM_TEXT} from "../../constants";
import {PageHeader} from "../../components/page-header/page-header.component";
import {PageLeft} from "../../components/page-left-part/page-left-part.component";
import {PageRight} from "../../components/page-right-part/page-right-part.component";

import "./web-team.styles.scss"

export const WebTeamComponent = ({data}) => {
    return (
        <>
            <div className="page-container">
                <div className="page-column">
                    <PageHeader
                        title="Web team"
                        subTitle="Blazing fast web"
                        text={WEB_TEAM_TEXT}
                    />
                    <PageLeft data={data.slice(0, 5)}/>
                </div>
                <div className="page-column">
                    <PageRight data={data.slice(5)}/>
                </div>
            </div>
            <BackArrow to={"/"}/>
            <NextArrow to={"/3/mobilewebteam"}/>
        </>
    );
};
