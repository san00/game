import React from "react";
import ReactDom from "react-dom";
import { Background, ModalOverlayBackGrnd } from "./modal-styles";

interface ModalProps {
  children: React.ReactNode
}

const Backdrop = ({ children }: ModalProps) => {
  return <Background >{children}</Background>

}
const ModalOverlay = ({ children }: ModalProps) => {
  return <ModalOverlayBackGrnd><div>{children}</div></ModalOverlayBackGrnd>
}

const Modal: React.FC<ModalProps> = ({ children }: ModalProps) => {
  const portalElement = document.getElementById("overlays") as HTMLElement
  return (
    <>
      {ReactDom.createPortal(<Backdrop>
      </Backdrop>, portalElement)}
      {ReactDom.createPortal(<ModalOverlay >{children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal

