import { useState } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal active">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Student Login</h3>
          <button onClick={onClose} className="close-btn">
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;