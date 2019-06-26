const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require('../models/auth.model');
const utils = require('../utilities/utils');

const AuthController = {

  login: (req, res) => {
    User.getUserByUsername(req.body.username)
      .then(result => {
        if (!result.length) {
          utils.errMsg(res, 'User not found');
        } else {
          bcrypt.compare(req.body.password, result[0].password)
            .then(same => {
              console.log(same);
              if (!same) {
                utils.errMsg(res, 'Password is incorrect!');
              } else {
                utils.successMsg(res,
                  {
                    alert: "Successfully Logged In!",
                    user: result[0].username
                  }
                );
              }
          });
        }
      })
  },

  logout: (req, res) => {
    utils.errMsg(res,
      {
        alert: "Successfully Logged Out!"
      }
    );
  },

  signUp: (req, res) => {
    User.getUserByUsername(req.body.username)
      .then(user => {
        if(user.length){
          utils.errMsg(res, 'Username already exists!');
        } else {
          bcrypt.hash(req.body.password, saltRounds)
            .then(password => {
            User.createUser({
                username: req.body.username,
                password: password
              })
              .then(result => {
                utils.successMsg(res,
                  {
                    alert: "Successfully Created User",
                    user: result
                  }
                );
              })
          })
        }
      })
  }
}

module.exports = AuthController;
