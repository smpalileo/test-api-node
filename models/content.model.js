const db = require('../db.js');

const Movie = {

  createMovie: (movie) => {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO movies SET title = ?, year = ?, rating = ?`,
        [movie.title, movie.year, movie.rating])
        .then(rows => {
          resolve(rows);
        })
        .catch(err => {
          reject(err);
        });
    })
  },

  getMovieById: (id) => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * from movies WHERE id = ?", id)
        .then(rows => {
          resolve(rows);
        });
    })
  },

  getAllMovies: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * from movies")
        .then(rows => {
          resolve(rows);
        });
    })
  },

  updateMovieById: (id, movie) => {
    return new Promise((resolve, reject) => {
      let update = 'UPDATE movies SET';
      let params = [];
      if(movie.title){
        update += ' title = ?,'
        params.push(movie.title);
      }
      if(movie.year){
        update += ' year = ?,'
        params.push(movie.year);
      }
      if(movie.rating){
        update += ' rating = ?'
        params.push(movie.rating);
      }
      update += ' WHERE  id = ?'
      params.push(id);
      db.query(update, params)
        .then(rows => {
          resolve(rows);
        });
    })
  },

  deleteMovieById: (id) => {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM movies WHERE id = ?", id)
        .then(rows => {
          resolve(rows);
        });
    })
  },

  deleteAllMovies: () => {
    return new Promise((resolve, reject) => {
      db.query("TRUNCATE movies")
      .then(rows => {
        resolve(rows);
      });
    })
  }
}

module.exports = Movie;