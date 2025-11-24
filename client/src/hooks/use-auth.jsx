import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../actions";
import { authMe } from "../request/api";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await authMe();
      if (user) {
        dispatch(getUser(user));
      }
      setLoading(false);
    };
    fetchUser();
  }, [dispatch]);

  return { loading };
};
