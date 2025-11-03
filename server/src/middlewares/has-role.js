export const hasRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.json({ message: "Access denied!" });

      return;
    }
    next();
  };
};
