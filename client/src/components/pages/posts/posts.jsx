import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDeletePost, fetchPosts } from "../../../request/thunk-action";
import { Spinner } from "../../../elements/spinner/spinner";
import { AddButton } from "./components/manage-buttons/add-post-button/add-post-button";
import { SortingButton } from "./components/manage-buttons/sorting-burron/sorting-batton";
import { DeleteButton } from "./components/manage-buttons/delete-post-button/delete-post-button";
import { EditButton } from "./components/manage-buttons/edit-post-button/edit-post-button";
import { checkAccess } from "../../utils";
import { NewPost } from "./components/new-post/new-post";
import { ROLES } from "../../../constants";
import { Title } from "../../../elements/title/title";
import { Modal } from "../../../components/modal/modal";

import styles from "./posts.module.css";

export const Posts = () => {
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);

  const [dateSotredPosts, setDateSotredPosts] = useState(posts);
  const [isSorted, setIsSorted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [addPostState, setAddPostState] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editPostData, setEditPostData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [itemToDeletId, setItemToDeletId] = useState(null);

  const isAuth = !!user.id;
  const role = user?.role;

  const dispatch = useDispatch();
  const question = "Удалить сообщение?";

  useEffect(() => {
    setLoading(true);
    dispatch(fetchPosts()).then(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    setDateSotredPosts(posts);
  }, [posts]);

  const onSorting = () => {
    if (!isSorted) {
      const sortingPosts = dateSotredPosts
        .slice()
        .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
      setDateSotredPosts(sortingPosts);
      setIsSorted(true);
    } else {
      setDateSotredPosts(posts);
      setIsSorted(false);
    }
  };

  const onAddPost = () => {
    setAddPostState(true);
  };

  const onEditPost = (post) => {
    setIsEditMode(true);
    setAddPostState(true);
    setEditPostData(post);
  };

  const onDeletePost = async (id) => {
    setIsOpen(true);
    setItemToDeletId(id);
  };

  const onConfirm = async (itemToDeletId) => {
    try {
      dispatch(fetchDeletePost(itemToDeletId));
      setIsOpen(false);
      setItemToDeletId(null);
    } catch (error) {
      console.error(error);
    }
  };

  const onCancel = () => {
    setIsOpen(false);
    setItemToDeletId(null);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {addPostState ? (
        <NewPost
          setAddPostState={setAddPostState}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          editPostData={editPostData}
          setEditPostData={setEditPostData}
        />
      ) : (
        <div className={styles["postsContainer"]}>
          <div className={styles.header}>
            <Title label="Наши новости." fontSize="26px" />
            <div className={styles["manage-panel"]}>
              {isAuth &&
                checkAccess([ROLES.ADMINISTRATOR, ROLES.MODERATOR], role) && (
                  <AddButton onClick={onAddPost} />
                )}
              <SortingButton onClick={onSorting} />
            </div>
          </div>
          {dateSotredPosts.map((post) => (
            <article key={post.id} className={styles.article}>
              <div className={styles.header}>
                <div className={styles.title}>
                  <Title label={post.title} fontSize="22px" color="#000" />
                </div>
                <div className={styles.time}>
                  <i className="fa fa-calendar-o"></i>
                  <div>{post.published_at}</div>
                </div>
              </div>

              <p>{post.content}</p>
              <div className={styles["service-panel"]}>
                {isAuth &&
                  checkAccess([ROLES.ADMINISTRATOR, ROLES.MODERATOR], role) && (
                    <>
                      <DeleteButton onClick={() => onDeletePost(post.id)} />
                      <EditButton
                        onClick={() => {
                          onEditPost(post);
                        }}
                      />
                    </>
                  )}
              </div>
            </article>
          ))}
        </div>
      )}
      <Modal
        question={question}
        isOpen={isOpen}
        onConfirm={onConfirm}
        onCancel={onCancel}
        itemToDeletId={itemToDeletId}
      />
    </>
  );
};
