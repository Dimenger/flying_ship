import { Title } from "../../../../../elements/title/title";

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
          name="title"
          id="title"
          rows="6"
          cols="150"
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
          name="content"
          id="content"
          rows="30"
          cols="150"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </fieldset>
      <input
        type="submit"
        value="Опубликовать сообщение"
        disabled={isSending}
      />
    </form>
  );
};
