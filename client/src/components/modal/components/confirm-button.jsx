import { PostButton } from "../../../elements/post-button/post-button";

export const ConfirmButton = ({ onClick }) => {
  const icon = <i className="fa fa-check" aria-hidden="true"></i>;
  return <PostButton icon={icon} onClick={onClick} />;
};
