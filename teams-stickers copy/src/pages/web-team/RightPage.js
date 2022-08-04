import React from "react";
import {StickerItem} from "../../components";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-end",
    },
    row: {
        margin: "0 4px 18px",
        width: "30%",
    }
}))

export const RightPage = ({data}) => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.container}>
            {data.map((item) => {
                return (
                    <Box component="div" key={item.id}>
                        <StickerItem sticker={item} onPage={true}/>
                    </Box>
                );
            })}
        </Box>
    );
};
