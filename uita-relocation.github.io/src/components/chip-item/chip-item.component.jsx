import React from "react";
import {Chip} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff !important",
        color: "black !important",
        border: "1px solid grey !important",
        borderRadius: "5px !important"
    },
    clicked: {
        border: "1px solid red !important",
    }
})

function ChipItem({label, handleClick, isClicked, index}) {
    const classes = useStyles();

    return (
        <div>
            <pre>{index}</pre>
            <Chip label={label}
                  onClick={handleClick}
                  classes={isClicked ? {root: classes.clicked} : {root: classes.root}}

            />
            {/*classes={{root: classes.appBar}}*/}
        </div>
    );
}

export default ChipItem;
