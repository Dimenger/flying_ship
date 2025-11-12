import PropTypes from "prop-types";

import { ConfirmButton } from "./components/confirm-button";
import { RejectButton } from "./components/reject-button";

import styles from "./modal.module.css";

export const Modal = ({
  question,
  isOpen,
  onConfirm,
  onCancel,
  itemToDeletId,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles["modal-container"]}>
      <div className={styles.overlay}>
        <div className={styles.box}>
          <h3>{question}</h3>
          <div className={styles.buttons}>
            <ConfirmButton onClick={() => onConfirm(itemToDeletId)} />
            <RejectButton onClick={() => onCancel(itemToDeletId)} />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  question: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  itemToDeletId: PropTypes.func.string,
};
