import React, {useMemo, useState} from "react";
import {ModalComponent} from "../../components";
import teammateService from "../../services/TeammateService";
import {useModals} from "../../hooks";
import {MODAL_TYPES} from "../../constants";
import {getSetById, setAvatar, setSetsAsSeen} from "../../utils";
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {StickerSetItem} from "./StickerSetItem";
import {StickerItemWrapper} from "./StickerItemWrapper";

const useStyles = makeStyles((theme) => ({
    heading: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "20px",
        margin: "20px 0 40px",
        "&.span": {
            marginBottom: "6px",
        }
    },
    container: {
        display: "flex",
        justifyContent: "center",
    }
}))

export const StickerSetWrapper = ({nonSeenSets, setSets, setTeammates}) => {
    const classes = useStyles();
    const [setId, setSetId] = useState(1);
    const [modalStack, openModal, closeModal] = useModals();


    const set = useMemo(
        () => getSetById(setId, nonSeenSets),
        [setId, nonSeenSets]
    );

    const handleCloseModal = () => {
        closeModal(MODAL_TYPES.STICKERS_MODAL);
        setSets((sets) => setSetsAsSeen(setId, sets));
    };

    const handlePasteStickers = async () => {
        handleCloseModal();
        try {
            await teammateService.addAvatar(set.stickers);
            setTeammates((teammates) => setAvatar(teammates, set));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Typography variant="h3" className={classes.heading}>
                <Box component="span">DAILY STICKER SETS</Box>YOU HAVE {nonSeenSets.length} STICKER SET
                {nonSeenSets.length > 1 ? "S" : null} TO OPEN
            </Typography>
            <Box component="div" className={classes.container}>
                {nonSeenSets.map((set) => {
                    return (
                        <StickerSetItem
                            key={set.id}
                            setId={set.id}
                            setSetId={setSetId}
                            openModal={() => openModal(MODAL_TYPES.STICKERS_MODAL)}
                        />
                    );
                })}
                <ModalComponent
                    isOpen={modalStack[MODAL_TYPES.STICKERS_MODAL]}
                    closeModal={handleCloseModal}
                >
                    {set?.stickers && (
                        <StickerItemWrapper
                            stickers={set.stickers}
                            handleClick={handlePasteStickers}
                        />
                    )}
                </ModalComponent>
            </Box>
        </>
    );
};
