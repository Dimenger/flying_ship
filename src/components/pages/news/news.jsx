import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchNews } from "../../../thunk-action/fetch-news";
import { Spinner } from "../../../elements/spinner/spinner";

import styles from "./news.module.css";

export const News = () => {
  const news = useSelector((state) => state.news.news);
  const dispatch = useDispatch();

  const [dateSotredNews, setDateSotredNews] = useState(news);
  const [isSorted, setIsSorted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchNews()).then(() => setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    setDateSotredNews(news);
  }, [news]);

  const hadleSorting = () => {
    if (!isSorted) {
      const sortingNews = dateSotredNews
        .slice()
        .sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
      setDateSotredNews(sortingNews);
      setIsSorted(true);
    } else {
      setDateSotredNews(news);
      setIsSorted(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className={styles.newsContainer}>
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
      {dateSotredNews.map(({ id, title, content, published_at }) => (
        <article key={id} className={styles.article}>
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
