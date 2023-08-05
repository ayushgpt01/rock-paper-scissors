import React from "react";

import { ReactComponent as Close } from "../../assets/icon-close.svg";
import { ReactComponent as Rules } from "../../assets/image-rules.svg";
import "./style.css";

const Modal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className='modal-wrapper'>
      <div className='modal-content'>
        <div className='modal-header'>
          <span className='modal-title'>Rules</span>
          <Close className='close-svg' onClick={() => setIsModalOpen(false)} />
        </div>
        <Rules />
      </div>
    </div>
  );
};

export default Modal;
