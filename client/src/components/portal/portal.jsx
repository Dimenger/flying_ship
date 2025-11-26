import { createPortal } from "react-dom";

import { ConfirmButton } from "./components/confirm-button";
import { RejectButton } from "./components/reject-button";

import styles from "./portal.module.css";

export const Portal = ({
  isOpen,
  question,
  onConfirm,
  onCancel,
  itemToDeletId,
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles["portal-container"]}>
      <div className={styles.overlay}>
        <div className={styles.box}>
          <h3>{question}</h3>
          <div className={styles.buttons}>
            <ConfirmButton onClick={() => onConfirm(itemToDeletId)} />
            <RejectButton onClick={() => onCancel(itemToDeletId)} />
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
