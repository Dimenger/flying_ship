import PropTypes from "prop-types";

import { PostButton } from "../../../../../../elements/post-button/post-button";

export const EditButton = ({ onClick }) => {
  const icon = (
    <i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i>
  );

  const title = "Редактировать сообщение";

  return <PostButton onClick={onClick} icon={icon} title={title} />;
};

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
