import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";
import {Heading} from "./Heading";
import {WEB_TEAM_TEXT} from "../../constants";
import {LeftPage} from "./LeftPage";
import {RightPage} from "./RightPage";
import {BackArrow, NextArrow} from "../../components/Arrow";
import {Column} from "./Column";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        width: "96%",
        [theme.breakpoints.down("lg")]: {
            flexWrap: "wrap"
        },
    },
    column: {
        border: "2px solid #b3b2b2",
        padding: "20px 10px 10px",
        margin: "10px",
        flexBasis: "47%",
        maxWidth: "47%",
        boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
    }
}))

export const WebTeam = ({data}) => {
    const classes = useStyles();

    return (
        <>
            <Box component="div" className={classes.container}>
                <Box component="div">
                    <Heading
                        title="Web team"
                        subTitle="Blazing fast web"
                        text={WEB_TEAM_TEXT}
                    />
                    <LeftPage data={data.slice(0, 5)}/>
                </Box>
                <Column>
                    <RightPage data={data.slice(5)}/>
                </Column>
            </Box>
            <BackArrow to={"/"}/>
            <NextArrow to={"/3/mobilewebteam"}/>
        </>
    );
};
