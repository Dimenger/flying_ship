import PropTypes from "prop-types";

import { PostButton } from "../../../../../../elements/post-button/post-button";

export const DeleteButton = ({ onClick }) => {
  const icon = <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>;

  const title = "Удалить сообщение";

  return <PostButton onClick={onClick} icon={icon} title={title} />;
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
