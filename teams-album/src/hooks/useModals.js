import { useState, useCallback } from "react";
import { MODAL_TYPES } from "../constants";

const initModalState = {
  [MODAL_TYPES.SETS_MODAL]: false,
  [MODAL_TYPES.STICKERS_MODAL]: false,
};

export const useModals = () => {
  const [modalState, setModalState] = useState(initModalState);

  const openModal = useCallback(
    (modalType) => {
      setModalState((prevState) => {
        const updatedModalState = { ...prevState };
        updatedModalState[modalType] = true;
        return updatedModalState;
      });
    },
    [setModalState]
  );

  const closeModal = useCallback(
    (modalType) => {
      setModalState((prevState) => {
        const updatedModalState = { ...prevState };
        updatedModalState[modalType] = false;
        return updatedModalState;
      });
    },
    [setModalState]
  );

  return [modalState, openModal, closeModal];
};
