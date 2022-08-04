import React, {useMemo} from "react";
import {StickerSetWrapper} from "../../components/sticker-set-wrapper/sticker-set-wrapper.component";
import {useModals} from "../../hooks";
import {MODAL_TYPES} from "../../constants";
import {Button, ModalComponent, NextArrow} from "../../components";
import {filterSeenSets} from "../../utils";

import "./home.styles.scss"

export const Home = ({sets, setSets, setTeammates}) => {
    const [modalStack, openModal, closeModal] = useModals();
    const nonSeenSets = useMemo(() => filterSeenSets(sets), [sets]);

    return (
        <>
            <div className="main">
                <h1 className="header">
                    <span>trendyol</span>
                    <span className="colored">tech</span>
                </h1>
                <h2 className="subheader">sticker album</h2>
            </div>
            <NextArrow to={"/2/webteam"}/>
            {!!nonSeenSets.length && (
                <>
                    <div className="button-group">
                        <Button
                            text="GET YOUR DAILY STICKERS"
                            onClick={() => openModal(MODAL_TYPES.SETS_MODAL)}
                        />
                    </div>
                    <ModalComponent
                        isOpen={modalStack[MODAL_TYPES.SETS_MODAL]}
                        closeModal={() => closeModal(MODAL_TYPES.SETS_MODAL)}>
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
