import { PostButton } from "../../../../../../elements/post-button/post-button";

export const AddButton = ({ onClick }) => {
  const icon = (
    <i id="add-icon" className="fa fa-plus fa-lg" aria-hidden="true"></i>
  );

  const title = "Добавить сообщение";

  return <PostButton onClick={onClick} icon={icon} title={title} />;
};
