export const getUser = ({ user, success }) => ({
  type: "GET_USER_SUCCESS",
  payload: { user, success },
});
