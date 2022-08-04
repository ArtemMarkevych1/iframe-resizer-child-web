import React from "react";
import {BackArrow} from "../../components";
import {MOBILE_TEAM_TEXT} from "../../constants";
import {PageHeader} from "../../components/page-header/page-header.component";
import {PageLeft} from "../../components/page-left-part/page-left-part.component";
import {PageRight} from "../../components/page-right-part/page-right-part.component";

import "./mobile-team.styles.scss"

export const MobileTeam = ({data}) => {
    return (
        <>
            <div className="page-container">
                <div className="page-column">
                    <PageHeader
                        title="Mobile Web team"
                        subTitle="Our favorite smart phone is iphone 4"
                        text={MOBILE_TEAM_TEXT}
                    />
                    <PageLeft data={data.slice(0, 5)}/>
                </div>
                <div className="page-column">
                    <PageRight data={data.slice(5)}/>
                </div>
            </div>
            <BackArrow to={"/2/webteam"}/>
        </>
    );
};
