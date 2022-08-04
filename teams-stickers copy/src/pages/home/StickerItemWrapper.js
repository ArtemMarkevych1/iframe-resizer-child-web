import React from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {SharedButton, StickerItem} from "../../components";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "15px 0 5px"
    },
    heading: {
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
        marginBottom: "50px",
    },
    stickers: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "40px",
    },
    buttons: {
        maxWidth: "38%",
        margin: "0 auto",
    }
}))

export const StickerItemWrapper = ({stickers, handleClick}) => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.container}>
            <h3 className={classes.heading}>STICKER SET HAS OPENED YOU HAVE 6 NEW STICKERS</h3>
            <div className={classes.stickers}>
                {stickers.map((sticker) => {
                    return <StickerItem key={sticker.id} sticker={sticker}/>;
                })}
            </div>
            <div className={classes.buttons}>
                <SharedButton text="PASTE TO YOUR ALBUM" onClick={handleClick}/>
            </div>
        </Box>
    );
};
