import React from 'react';

const Modal = ({ show, onClose, message }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="text-xl mb-4">{message}</div>
        <button
          onClick={onClose}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
