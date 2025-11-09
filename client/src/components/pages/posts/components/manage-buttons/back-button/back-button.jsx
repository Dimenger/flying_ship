import { PostButton } from "../../../../../../elements/post-button/post-button";

export const BackButton = ({ onClick }) => {
  const icon = (
    <i id="add-icon" className="fa fa-backward fa-lg" aria-hidden="true"></i>
  );

  const title = "Вернуться к списку";

  return <PostButton onClick={onClick} icon={icon} title={title} />;
};
