import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../../request/thunk-action";
import { Spinner } from "../../../elements/spinner/spinner";
import { AddButton } from "./components/manage-buttons/add-post-button/add-post-button";
import { SortingButton } from "./components/manage-buttons/sorting-burron/sorting-batton";
import { DeleteButton } from "./components/manage-buttons/delete-post-button/delete-post-button";
import { EditButton } from "./components/manage-buttons/edit-post-button/edit-post-button";
import { checkAccess } from "../../utils";
import { NewPost } from "./components/new-post/new-post";
import { ROLES } from "../../../constants";

import styles from "./posts.module.css";

export const Posts = () => {
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [dateSotredPosts, setDateSotredPosts] = useState(posts);
  const [isSorted, setIsSorted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [addPostState, setAddPostState] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editPostData, setEditPostData] = useState({});

  const iaAuth = !!user.id;
  const role = user?.role;

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
    try {
      const res = await fetch(`http://localhost:3000/post/delete-post/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      console.log(id);
      if (!res.ok) {
        throw new Error("Error");
      }
      const result = await res.json();
      dispatch(fetchPosts()).then(() => setLoading(false));
      console.log(result);
    } catch (error) {
      console.error(error);
    }
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
          <div className={styles["manage-panel"]}>
            <SortingButton onClick={onSorting} />
            {iaAuth &&
              checkAccess([ROLES.ADMINISTRATOR, ROLES.MODERATOR], role) && (
                <AddButton onClick={onAddPost} />
              )}
          </div>
          {dateSotredPosts.map((post) => (
            <article key={post.id} className={styles.article}>
              <div className={styles.title}>
                <h3>{post.title}</h3>
                <div className={styles["service-panel"]}>
                  {iaAuth &&
                    checkAccess(
                      [ROLES.ADMINISTRATOR, ROLES.MODERATOR],
                      role
                    ) && (
                      <>
                        <DeleteButton onClick={() => onDeletePost(post.id)} />
                        <EditButton
                          onClick={() => {
                            onEditPost(post);
                          }}
                        />
                      </>
                    )}
                  <div className={styles.time}>
                    <i className="fa fa-calendar-o"></i>
                    <div>{post.published_at}</div>
                  </div>
                </div>
              </div>
              <p>{post.content}</p>
            </article>
          ))}
        </div>
      )}
    </>
  );
};
