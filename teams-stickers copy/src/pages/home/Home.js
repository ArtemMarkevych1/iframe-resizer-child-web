import React, {useMemo} from "react";
import {useModals} from "../../../hooks";
import {MODAL_TYPES} from "../../../constants";
import {filterSeenSets} from "../../../utils";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import {SharedButton} from "../../../components/Button";
import {ModalComponent, NextArrow} from "../../../components";
import {StickerSetWrapper} from "./StickerSetWrapper";

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        flexDirection: "column",
        width: "44%",
        height: "calc(100vh - 40px)",
        boxSizing: "border-box",
        padding: "0 50px",
        border: "2px solid #b3b2b2",
        boxShadow: "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)",
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        alignSelf: "center",
        flex: 1,
        fontSize: "7vw",
        fontWeight: 500,
        lineHeight: 1.1,
        marginTop: "20vh",
    },
    subheader: {
        fontSize: "4vw",
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        marginBottom: "3vh",
    },
    colored: {
        fontSize: "6vw",
        color: "#eb6d00",
    }

}))

export const Home = ({sets, setSets, setTeammates}) => {
    const classes = useStyles();

    const [modalStack, openModal, closeModal] = useModals();
    const nonSeenSets = useMemo(() => filterSeenSets(sets), [sets]);

    return (
        <>
            <Box className={classes.main}>
                <Typography variant="h1" className={classes.header}>
                    <Box component="span" m="{1}">trendyol</Box>
                    <Box component="span" m="{1}" className={classes.colored}>tech</Box>
                </Typography>
                <Typography variant="h2" className={classes.subheader}>sticker album</Typography>
            </Box>
            <NextArrow to={"/2/webteam"}/>

            {!!nonSeenSets.length && (
                <>
                    <div className="button-container">
                        <SharedButton
                            text="GET YOUR DAILY STICKERS"
                            onClick={() => openModal(MODAL_TYPES.SETS_MODAL)}
                        />
                    </div>
                    <ModalComponent
                        isOpen={modalStack[MODAL_TYPES.SETS_MODAL]}
                        closeModal={() => closeModal(MODAL_TYPES.SETS_MODAL)}
                    >
                        <StickerSetWrapper
                            nonSeenSets={nonSeenSets}
                            setSets={setSets}
                            setTeammates={setTeammates}
                        />
                    </ModalComponent>
                </>
            )}
        </>
    );
};
