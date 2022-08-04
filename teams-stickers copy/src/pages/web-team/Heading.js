import React from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 20px",
        marginBottom: "20px",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "226px",
        minWidth: "106px",
        height: "240px",
        marginRight: "30px",
        color: "#008000",
        border: "2px solid #008000",
        textTransform: "uppercase",
    },
    header: {
        display: "flex",
        flexDirection: "column",
        textTransform: "uppercase",
        "&.h1": {
            fontFamily: "\"Architects Daughter\", cursive",
            fontSize: "34px",
            marginBottom: "26px",
        },
        "&.h2": {
            fontSize: "24px",
            marginBottom: "26px",
            color: "#1675d7",
        }
    },
    text: {
        display: "flex",
        flexDirection: "column",
        color: "#e73d3d",
        "&.p:first-child": {
            marginBottom: "20px",
        }
    }
}))

export const Heading = ({title, subTitle, text}) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.logo}>
                <p>Team Logo</p>
            </Box>
            <div>
                <Box component="div" className={classes.header}>
                    <h1>{title}</h1>
                    <h2>{subTitle}</h2>
                </Box>
                <div className="text">
                    {text.map((t, i) => (
                        <p key={i}>{t}</p>
                    ))}
                </div>
            </div>
        </Box>
    );
};
