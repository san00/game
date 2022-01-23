import React from "react";
import GameRulesInfo from "./../../images/image-rules.svg";
import Modal from "../modal/Modal";
import { ModalImage } from "../modal/modal-styles";

interface RulesProps {
  setShowRules: (showRules?: boolean) => void;
}

const Rules: React.FC<RulesProps> = ({ setShowRules }: RulesProps) => {
  const closeRulesOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowRules(false);
  };
  return (
    <Modal>
      <ModalImage src={GameRulesInfo} alt="rules" onClick={closeRulesOnClick} />
      <button onClick={closeRulesOnClick}>Close</button>
    </Modal>
  );
};

export default Rules;
