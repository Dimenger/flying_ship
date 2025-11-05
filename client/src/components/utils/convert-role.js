import { ROLES } from "../../constants";

export const convertRole = (roleNumber) => {
  const reverseRoles = Object.entries(ROLES).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});
  return reverseRoles[roleNumber];
};
