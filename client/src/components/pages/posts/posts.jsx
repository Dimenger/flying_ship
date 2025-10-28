import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../../thunk-action/fetch-posts";
import { Spinner } from "../../../elements/spinner/spinner";

import styles from "./posts.module.css";

export const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [dateSotredPosts, setDateSotredPosts] = useState(posts);
  const [isSorted, setIsSorted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchPosts()).then(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    setDateSotredPosts(posts);
  }, [posts]);

  const hadleSorting = () => {
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

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles.postsContainer}>
      <button className={styles.sorting} onClick={hadleSorting}>
        <i
          id="sorting-icon"
          className="fa fa-sort fa-lg"
          aria-hidden="true"
        ></i>
        <label htmlFor="sorting-icon" className={styles.lable}>
          Сортировка по дате
        </label>
      </button>
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
  );
};
