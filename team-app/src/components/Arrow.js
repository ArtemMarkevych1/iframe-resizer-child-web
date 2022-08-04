import React from "react";
import {Link} from "react-router-dom";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const useStyles = makeStyles((theme) => ({
    container: {
        position: "absolute",
        top: "calc(50% - 25px)",
        alignItems: "center",
        ">a": {
            fontSize: "44px",
            "&:hover": {
                cursor: "pointer",
                color: "#eb6d00",
                transition: "0.3s",
            },
        },
    }
}))

export const NextArrow = ({to}) => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.container} left={"10px"}>
            <Link to={to}>
                <ArrowForwardIosIcon/>
            </Link>
        </Box>
    );
};

export const BackArrow = ({to}) => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.container} right={"10px"}>
            <Link to={to}>
                <ArrowBackIosNewIcon/>
            </Link>
        </Box>
    );
};
