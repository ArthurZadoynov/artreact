import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  bg?: string;
};

export const Modal: FC<Props> = ({ isOpen, onClose, children, bg }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div
        className="modal-content"
        style={{
          background: bg,
        }}
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
        {}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};
