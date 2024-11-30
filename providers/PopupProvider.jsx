"use client";

import { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [popups, setPopups] = useState([]); // Array of active popups

  const showPopup = ({ message, type = "info", duration = 3000 }) => {
    const id = Date.now();
    setPopups((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setPopups((prev) => prev.filter((popup) => popup.id !== id));
    }, duration);
  };

  return (
    <PopupContext.Provider value={{ showPopup }}>
      {children}
      {ReactDOM.createPortal(
        <div className="fixed top-4 right-4 z-50 space-y-2">
          {popups.map((popup) => (
            <Popup key={popup.id} {...popup} />
          ))}
        </div>,
        document.body
      )}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);

// Popup Component
const Popup = ({ message, type }) => (
  <div
    className={`p-4 rounded shadow-lg ${
      type === "failure"
        ? "bg-red-500"
        : type === "info"
        ? "bg-gray-500"
        : "bg-green-500"
    } text-white`}
  >
    {message}
  </div>
);
