import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { getUser } from "../actions";
// import { authMe } from "../request/api";
import { fetchUser } from "../request/thunk-action";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchUser = async () => {
    //   const user = await authMe();
    //   if (user) {
    //     dispatch(getUser(user));
    //   }
    //   setLoading(false);
    // };
    dispatch(fetchUser());
    setLoading(false);
  }, [dispatch]);

  return { loading };
};
