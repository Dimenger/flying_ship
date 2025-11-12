import PropTypes from "prop-types";

import styles from "./enter-exit.module.css";

export const EnterExit = ({ stateFlag }) => {
  return (
    <div className={styles.EnterExit}>
      {stateFlag ? (
        <i
          className="fa fa-sign-out fa-flip-horizontal fa-2x"
          aria-hidden="true"
        ></i>
      ) : (
        <i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>
      )}
    </div>
  );
};

EnterExit.PropTypes = { stateFlag: PropTypes.bool };
