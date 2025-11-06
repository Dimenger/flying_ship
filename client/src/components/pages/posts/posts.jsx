import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../../request/thunk-action";
import { Spinner } from "../../../elements/spinner/spinner";
import { AddButton } from "./components/manage-buttons/add-post-button/add-post-button";
import { SortingButton } from "./components/manage-buttons/sorting-burron/sorting-batton";
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

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {addPostState ? (
        <NewPost setAddPostState={setAddPostState} />
      ) : (
        <div className={styles["postsContainer"]}>
          <div className={styles["manage-panel"]}>
            <SortingButton onClick={onSorting} />
            {iaAuth &&
              checkAccess([ROLES.ADMINISTRATOR, ROLES.MODERATOR], role) && (
                <AddButton onClick={onAddPost} />
              )}
          </div>
          {dateSotredPosts.map(({ _id, title, content, published_at }) => (
            <article key={_id} className={styles.article}>
              <div className={styles.title}>
                <h3>{title}</h3>
                <div className={styles.time}>
                  <i className="fa fa-calendar-o"></i>
                  <time dateTime={published_at}>{published_at}</time>
                </div>
              </div>
              <p>{content}</p>
            </article>
          ))}
        </div>
      )}
    </>
  );
};
