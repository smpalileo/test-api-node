const db = require('../db');

const User = {

  createUser: (user) => {
    db.query("INSERT INTO users (`username`, `password`) VALUES", user)
      .then((err, res)  => {
        return err ? err : res;
      });
  },

  getUserById: (id) => {
    db.query("SELECT username FROM users WHERE id = ?", id)
      .then((err, res) => {
        return err ? err : res;
      });
  },

  getUserByUsername: (username) => {
    db.query("SELECT username FROM users WHERE username = ?", username)
      .then((err, res) => {
        return err ? err : res;
      });
  },

  getAllUsers: () => {
    db.query("SELECT * FROM users")
      .then((err, res) => {
        return err ? err : res;
      });
  },

  updateUserById: (id, user) => {
    db.query("UPDATE users (`password`) VALUES = ? WHERE id = ?", [user, id])
      .then((err, res) => {
        return err ? err : res;
      });
  },

  deleteUserById: (id) => {
    db.query("DELETE FROM users WHERE id = ?", id)
      .then((err, res) => {
        return err ? err : res;
      });
  }
}

module.exports = User;