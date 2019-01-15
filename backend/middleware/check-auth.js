const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'a_super_duper_secret');
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Header token authorization failed.'
    });
  }
};
