import { useState, useCallback } from "react";
import { MODAL_TYPES } from "../constants";

const initModalStack = {
    [MODAL_TYPES.SETS_MODAL]: false,
    [MODAL_TYPES.STICKERS_MODAL]: false,
};

export const useModals = () => {
    const [modalStack, setModalStack] = useState(initModalStack);

    const openModal = useCallback(
        (modalType) => {
            setModalStack((previousStack) => {
                const updatedModalStack = { ...previousStack };
                updatedModalStack[modalType] = true;
                return updatedModalStack;
            });
        },
        [setModalStack]
    );

    const closeModal = useCallback(
        (modalType) => {
            setModalStack((previousStack) => {
                const updatedModalStack = { ...previousStack };
                updatedModalStack[modalType] = false;
                return updatedModalStack;
            });
        },
        [setModalStack]
    );

    return [modalStack, openModal, closeModal];
};
