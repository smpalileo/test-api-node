const db = require('../db');

const User = {

  createUser: (user) => {
    db.query("INSERT INTO users set ?", user)
      .then((err, res)  => {
        return err ? err : res;
      });
  },

  getUserById: (id) => {
    db.query("Select user from users where id = ?", id)
      .then((err, res) => {
        return err ? err : res;
      });
  },

  getAllUsers: () => {
    db.query("Select * from users")
      .then((err, res) => {
        return err ? err : res;
      });
  },

  updateUserById: (id, user) => {
    db.query("UPDATE users SET user = ? WHERE id = ?", [user, id])
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