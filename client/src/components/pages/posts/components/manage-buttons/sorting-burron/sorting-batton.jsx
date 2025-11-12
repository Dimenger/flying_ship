import PropTypes from "prop-types";

import { PostButton } from "../../../../../../elements/post-button/post-button";

export const SortingButton = ({ onClick }) => {
  const icon = (
    <i id="sorting-icon" className="fa fa-sort fa-lg" aria-hidden="true"></i>
  );

  const title = "Сортировка по дате";

  return <PostButton onClick={onClick} icon={icon} title={title} />;
};

SortingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
