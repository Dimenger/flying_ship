export const hasRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.yser.role)) {
      res.json({ message: "Access denied!" });

      return;
    }
    next();
  };
};
