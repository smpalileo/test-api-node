const db = require('../db');

const User = {
  createUser: (user) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO users SET username = ?, password = ?", [user.username, user.password])
        .then(rows => {
          resolve(rows);
        }).catch(err => {
          reject(err);
        });
    })
  },

  getUserByUsername: (username) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE username = ?", username)
      .then(rows => {
        resolve(rows);
      });
    })
  },

  getAllUsers: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users")
      .then(rows => {
        resolve(rows);
      });
    })
  },

  updateUserById: (id, user) => {
    return new Promise((resolve, reject) => {
      db.query("UPDATE users SET password = ? WHERE id = ?", [user.password, id])
      .then(rows => {
        resolve(rows);
      });
    })
  },

  deleteUserById: (id) => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM users WHERE id = ?", id)
      .then(rows => {
        resolve(rows);
      });
    })
  }
}

module.exports = User;