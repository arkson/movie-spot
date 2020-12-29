import React, { createContext } from "react";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";

export const ModalContext = createContext();

export const ModalProvider = props => {
  let { modal, handleModal, modalContent } = useModal();
  return (
    <ModalContext.Provider value={{ modal, handleModal, modalContent }}>
      <Modal />
      {props.children}
    </ModalContext.Provider>
  );
};

