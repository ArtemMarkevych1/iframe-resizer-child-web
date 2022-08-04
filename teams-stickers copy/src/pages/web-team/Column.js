import React from "react"
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        border: "2px solid #b3b2b2",
        padding: "20px 10px 10px",
        margin: "10px",
        flexBasis: "47%",
        maxWidth: "47%",
        boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
    }
}))

export const Column = () => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.container}></Box>
    )
}
