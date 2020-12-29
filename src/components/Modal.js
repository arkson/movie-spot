import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../context/ModalContext";

const Modal = () => {
    let { modalContent, handleModal, modal } = useContext(ModalContext);
    if (modal) {
        return ReactDOM.createPortal(
            <div className="modal">
                <button
                    onClick={() => handleModal()}
                >
                    &times;
                </button>
                {modalContent}

            </div>,
            document.querySelector("#modal-root")
        );
    } else return null;
};

export default Modal;
