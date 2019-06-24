const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const User = require('../models/auth.model');
const utils = require('../utilities/utils');

const AuthController = {

  JWTGuard: (req, res) => {
      if (req.method === 'OPTIONS') {
        return null;
      }
      const token = req.headers.authorization;
      if (!token || (token && !token.startsWith('Bearer '))) {
        utils.deny(res);
      }
      return jwt.verify(token.substring('Bearer '.length - 1).trim(), 'test-app');
  },

  login: (req, res) => {
      let payload = req.body;
      // DB GET USER
      if (!user) {
        utils.errMsg('User not found');
      }
      bcrypt.compare(req.body.password, user.password)
        .then((err, same) => {
          if (err || !same) {
            utils.errMsg('Password is incorrect!');
          } else {
            const token = jwt.sign(
              { authorized: true, userId: user._id },
              'test-app',
              (payload.keep) ? null : { expiresIn: '8h' }
            );
            res.status(200).json({
              status: 1,
              message: "Successfully Logged In!",
              data: {
                user: user,
                token: token
              }
            });
          }
      });
  },

  logout: (req, res) => {
    const token = jwt.sign(
      { authorized: false, userId: null },
      'test-app',
      { expiresIn: '1s' }
    );
    res.json({
      status: 1,
      message: "Successfully Logged Out!",
      data: {
        token: token
      }
    });
  }
}

module.exports = AuthController;
