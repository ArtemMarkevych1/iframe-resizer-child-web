import React from "react";
import stickerSetService from "../../services/StickerSetService";
import dateService from "../../services/DateService";

import {makeStyles} from "@material-ui/core/styles";
import {Box, Typography} from "@material-ui/core";
import {SharedButton} from "../../../components/Button";

const useStyles = makeStyles((theme) => ({
    container: {
        flexBasis: "166px",
        maxWidth: "166px",
        margin: "10px 15px 60px",
        "&.button": {
            fontWeight: 700,
        }
    },
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid #b3b2b2",
        padding: "30px 10px 46px",
        marginBottom: "20px",
        boxShadow: "3px 5px 11px #aaaaaa",
        transformOrigin: "0% 50%",
        transition: "all 0.4s ease",
        "&:hover": {
            transform: "rotateY(-10deg)",
            boxShadow: "15px 15px 15px rgba(0, 0, 0, 0.2)",
        },
        "p:last-child": {
            fontWeight: 700
        }
    },
    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        fontFamily: "\"Poppins\", sans-serif\"",
        fontSize: "26px",
        fontWeight: 500,
        marginBottom: "40px",
        "&.span:last-child": {
            color: "#eb6d00"
        }
    }
}))

export const StickerSetItem = ({setId, openModal, setSetId}) => {
    const classes = useStyles();

    const handleClick = async () => {
        openModal();
        setSetId(setId);
        dateService.addDate();
        stickerSetService.markAsSeen(setId);
    };

    return (
        <Box component="div" className={classes.container}>
            <div className={classes.content}>
                <Typography className={classes.text}>
                    <Box component="span">trendyol</Box>
                    <Box component="span">tech</Box>
                </Typography>
                <Typography>STICKER SET</Typography>
            </div>
            <SharedButton text="OPEN" fontSize="1vw" onClick={handleClick}/>
        </Box>
    );
};
