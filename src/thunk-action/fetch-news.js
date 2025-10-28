import { postNews } from "../actions";
import { getNews } from "../bff/api";

export const fetchNews = () => async (dispatch) => {
  const news = await getNews();
  dispatch(postNews(news));
};
