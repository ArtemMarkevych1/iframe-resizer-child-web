import React, {useMemo, useState} from "react";
import {Button, ModalComponent, StickerItem} from "../../components";
import teammateService from "../../services/teammate-service";
import dateService from "../../services/date-service";
import stickerSetService from "../../services/sticker-set-service";
import {useModals} from "../../hooks";
import {MODAL_TYPES} from "../../constants";
import {getSet, setAvatar, setSetsAsSeen} from "../../utils";

import "./sticker-set-wrapper.styles.scss"

const StickerItemWrapperComponent = ({stickers, handleClick}) => (
    <div className="sticker-item-wrapper">
        <h3 className="heading">STICKER SET HAS OPENED YOU HAVE 6 NEW STICKERS</h3>
        <div className="sticker-block">
            {stickers.map((sticker) => {
                return <StickerItem key={sticker.id} sticker={sticker}/>;
            })}
        </div>
        <div className="buttons-group">
            <Button text="PASTE TO YOUR ALBUM" onClick={handleClick}/>
        </div>
    </div>
);

const StickerSetItem = ({setId, openModal, setSetId}) => {
    const handleClick = async () => {
        openModal();
        setSetId(setId);
        dateService.addDate();
        stickerSetService.markAsSeen(setId);
    };

    return (
        <div className="sticker-set-item">
            <div className="content">
                <div className="text">
                    <span>trendyol</span>
                    <span>tech</span>
                </div>
                <p>STICKER SET</p>
            </div>
            <Button text="OPEN" fontSize="1vw" onClick={handleClick}/>
        </div>
    );
};

export const StickerSetWrapper = ({nonSeenSets, setSets, setTeammates}) => {
    const [setId, setSetId] = useState(1);
    const [modalStack, openModal, closeModal] = useModals();

    const set = useMemo(
        () => getSet(setId, nonSeenSets),
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
            <h3 className="set-heading">
                <span>DAILY STICKER SETS</span>YOU HAVE {nonSeenSets.length} STICKER SET
                {nonSeenSets.length > 1 ? "S" : null} TO OPEN
            </h3>
            <div className="set-block">
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
                        <StickerItemWrapperComponent
                            stickers={set.stickers}
                            handleClick={handlePasteStickers}
                        />
                    )}
                </ModalComponent>
            </div>
        </>
    );
};
