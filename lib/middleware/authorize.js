module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try {
    if (!req.user || req.user.email !== 'admin')
      throw new Error({ message: 'You do not have access to view this page' });
  } catch (error) {
    error.status = 403;
    next (error);
  }
};
