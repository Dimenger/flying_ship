import PropTypes from "prop-types";

import { PostButton } from "../../../elements/post-button/post-button";

export const RejectButton = ({ onClick }) => {
  const icon = <i className="fa fa-times" aria-hidden="true"></i>;
  return <PostButton icon={icon} onClick={onClick} />;
};

RejectButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
