import React from "react";
import {StickerItem} from "../../components";
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        "> div:first-child": {
            marginBottom: "44px",
        }
    },
    row: {
        display: "flex",
        //flex-wrap: wrap;
        flexWrap: "wrap-reverse",
        justifyContent: "space-around",
        "> div": {
            width: "30%",
            margin: 0,
        }
    }
}))

export const LeftPage = ({data}) => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.container}>
            <Box component="div" className={classes.row}>
                {data.slice(0, 2).map((item) => {
                    return <StickerItem key={item.id} sticker={item} onPage={true}/>;
                })}
            </Box>
            <Box component="div">
                {data.slice(2).map((item) => {
                    return <StickerItem key={item.id} sticker={item} onPage={true}/>;
                })}
            </Box>
        </Box>
    );
};
