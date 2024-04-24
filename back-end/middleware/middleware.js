module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    return res.status(401).json("You are not authenticated")
  }
  next();
};
module.exports.isOwner = async (req, res, next) => {
  const { id } = req.params;
  const course = await Course.findById(id);
  if (!course.owner.equals(req.user._id)) {
    res.status(401).json("")
  }
  next();
};
