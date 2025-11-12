import PropTypes from "prop-types";

import { PostButton } from "../../../elements/post-button/post-button";

export const ConfirmButton = ({ onClick }) => {
  const icon = <i className="fa fa-check" aria-hidden="true"></i>;
  return <PostButton icon={icon} onClick={onClick} />;
};

ConfirmButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
