import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "2px solid #5a5a5a",
    borderRadius: "none",
    minWidth: "600px",
  },
  overlay: {
    backgroundColor: "#808080a1",
  },
};

export const ModalComponent = ({ children, isOpen, closeModal }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </Modal>
  );
};
