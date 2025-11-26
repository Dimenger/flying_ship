import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../actions";
import { authMe } from "../request/api";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await authMe();
      if (result) {
        dispatch(getUser({ user: result.user, success: result.success }));
      }
      setLoading(false);
    };
    fetchUser();
  }, [dispatch]);

  return { loading };
};
