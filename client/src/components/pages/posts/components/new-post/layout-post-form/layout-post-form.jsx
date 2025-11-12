import PropTypes from "prop-types";

import { Title } from "../../../../../../elements/title/title";

import styles from "./layout-post-form.module.css";

export const LayoutPostForm = ({
  isEditMode,
  isSending,
  handleEditPost,
  handleAddPost,
  setContent,
  setTitle,
  title,
  content,
}) => {
  return (
    <form onSubmit={isEditMode ? handleEditPost : handleAddPost}>
      <fieldset>
        <legend>
          <Title label="Заголовок" fontSize={"30px"} />
        </legend>
        <textarea
          className={styles.textarea}
          name="title"
          id="title"
          rows="4"
          cols="80"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></textarea>
      </fieldset>

      <fieldset>
        <legend>
          <Title label="Текст сообщения" fontSize={"30px"} />
        </legend>

        <textarea
          className={styles.textarea}
          name="content"
          id="content"
          rows="16"
          cols="80"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </fieldset>
      <input
        className={styles.input}
        type="submit"
        value="Опубликовать сообщение"
        disabled={isSending}
      />
    </form>
  );
};

LayoutPostForm.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  isSending: PropTypes.bool.isRequired,
  handleEditPost: PropTypes.func.isRequired,
  handleAddPost: PropTypes.func.isRequired,
  setContent: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
