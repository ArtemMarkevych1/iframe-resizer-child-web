import React from "react";
import {BackArrow} from "../../components/Arrow";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Heading} from "../web-team/Heading";
import {Column} from "../web-team/Column";
import {LeftPage} from "../web-team/LeftPage";
import {RightPage} from "../web-team/RightPage";
import {MOBILE_TEAM_TEXT} from "../../constants";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        width: "96%",
        [theme.breakpoints.down("lg")]: {
            flexWrap: "wrap"
        }
    }
}))

export const MobileTeam = ({data}) => {
    const classes = useStyles();

    return (
        <>
            <Box component="div" className={classes.container}>
                <Column>
                    <Heading
                        title="Mobile Web team"
                        subTitle="Our favorite smart phone is iphone 4"
                        text={MOBILE_TEAM_TEXT}
                    />
                    <LeftPage data={data.slice(0, 5)}/>
                </Column>
                <Column>
                    <RightPage data={data.slice(5)}/>
                </Column>
            </Box>
            <BackArrow to={"/2/webteam"}/>
        </>
    );
};
