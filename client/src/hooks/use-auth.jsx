import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { getUser } from "../actions";
// import { authMe } from "../request/api";
import { fetchUser } from "../request/thunk-action";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      dispatch(fetchUser());
      setLoading(false);
    };
    loadUser();
  }, [dispatch]);

  return { loading };
};

// const fetchUser = async () => {
//   const user = await authMe();
//   if (user) {
//     dispatch(getUser(user));
//   }
//   setLoading(false);
// };
