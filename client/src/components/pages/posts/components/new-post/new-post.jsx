import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Title } from "../../../../../elements/title/title";
import { fetchPosts } from "../../../../../request/thunk-action";
import { fetchAddNewPost } from "../../../../../request/thunk-action";
import { fetchEditPost } from "../../../../../request/thunk-action";
import { Notification } from "../../../../../elements/notification/notification";
import { BackButton } from "../manage-buttons/back-button/back-button";

import styles from "./new-post.module.css";
import { LayoutPostForm } from "./layout-post-form";

export const NewPost = ({
  setAddPostState,
  isEditMode,
  setIsEditMode,
  editPostData,
  setEditPostData,
}) => {
  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSending, setIsSending] = useState(false);

  const newPostData = { title, content, author: user.id };
  const newEditPostData = {
    id: editPostData.id,
    title,
    content,
    author: user.id,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (editPostData) {
      setTitle(editPostData.title);
      setContent(editPostData.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editPostData]);

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      await dispatch(fetchAddNewPost(newPostData));
      await dispatch(fetchPosts());

      setIsSending(true);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const handleEditPost = async (e) => {
    try {
      e.preventDefault();
      await dispatch(fetchEditPost(newEditPostData));
      await dispatch(fetchPosts());

      setIsSending(true);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const backToList = () => {
    setAddPostState(false);
    setIsSending(false);
    setIsEditMode(false);
    setEditPostData({});
  };

  return (
    <div>
      <Notification />
      <div className={styles["back-to-list"]}>
        <BackButton onClick={backToList} />
      </div>
      <LayoutPostForm
        isEditMode={isEditMode}
        isSending={isSending}
        handleEditPost={handleEditPost}
        handleAddPost={handleAddPost}
        setContent={setContent}
        setTitle={setTitle}
        title={title}
        content={content}
      />
    </div>
  );
};
