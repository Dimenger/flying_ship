import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Title } from "../../../../../elements/title/title";

import styles from "./new-post.module.css";
import { fetchPosts } from "../../../../../request/thunk-action";

export const NewPost = ({ setAddPostState }) => {
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [content, setContentne] = useState("");
  const [isSending, setIsSending] = useState(false);

  const newPostData = { title, content, author: user.id };
  const dispatch = useDispatch();

  const handleSendRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/post/add-new-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPostData),
        credentials: "include",
      });
      console.log("handleSendRequest:", newPostData);
      if (!response.ok) {
        throw new Error(`Статус: ${response.status}`);
      }
      const result = await response.json();
      setIsSending(true);
      console.log("Ответ сервера:", result);

      setTitle("");
      setContentne("");
      setTimeout(() => {
        setAddPostState(false);
        setIsSending(false);
      }, 3000);
      dispatch(fetchPosts());
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <div className={styles.form_container}>
      <h2 className={isSending ? styles.messageInvisible : styles.message}>
        Новость опубликована!
      </h2>

      <form className={styles.form} onSubmit={handleSendRequest}>
        <fieldset className={styles.title}>
          <legend>
            <Title label="Заголовок" />
          </legend>
          <textarea
            name="title"
            id="title"
            rows="6"
            cols="150"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></textarea>
        </fieldset>

        <fieldset className={styles.content}>
          <legend>
            <Title label="Текст сообщения" />
          </legend>

          <textarea
            name="content"
            id="content"
            rows="30"
            cols="150"
            value={content}
            onChange={(e) => setContentne(e.target.value)}
            required
          ></textarea>
        </fieldset>
        <input
          type="submit"
          value="Опубликовать сообщение"
          disabled={isSending}
        />
      </form>
    </div>
  );
};
