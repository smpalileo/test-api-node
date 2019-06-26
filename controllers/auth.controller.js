const bcrypt = require("bcrypt");
const User = require('../models/auth.model');
const utils = require('../utilities/utils');

const AuthController = {

  login: (req, res) => {
    /*
    {
      username: string,
      password: string
    }
    */
    User.getUserByUsername(req.body.username).then(result => {
      if (!result) {
        utils.errMsg(res, 'User not found');
      } else {
        bcrypt.compare(req.body.password, user.password)
          .then((err, same) => {
            if (err || !same) {
              utils.errMsg(res, 'Password is incorrect!');
            } else {
              utils.successMsg(res,
                {
                  alert: "Successfully Logged In!",
                  user: user
                }
              );
            }
        });
      }
    })
  },

  logout: (req, res) => {
    utils.successMsg(res,
      {
        alert: "Successfully Logged Out!"
      }
    );
  },

  signUp: (req, res) => {

  }
}

module.exports = AuthController;
