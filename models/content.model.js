const db = require('../db');

const Movie = {

  createMovie: (movie) => {
    db.query("INSERT INTO movies (`title`, `year`, `rating`) VALUES", movie)
      .then((err, res)  => {
        return err ? err : res;
      });
  },

  getMovieById: (id) => {
    db.query("SELECT movie FROM movies WHERE id = ?", id)
      .then((err, res) => {
        return err ? err : res;
      });
  },

  getAllMovies: () => {
    db.query("SELECT * from movies")
      .then((err, res) => {
        return err ? err : res;
      });
  },

  updateMovieById: (id, movie) => {
    db.query("UPDATE movies (`title`, `year`, `rating`) VALUES = ? WHERE id = ?", [movie, id])
      .then((err, res) => {
        return err ? err : res;
      });
  },

  deleteMovieById: (id) => {
    db.query("DELETE FROM movies WHERE id = ?", id)
      .then((err, res) => {
        return err ? err : res;
      });
  },

  deleteAllMovies: () => {
    db.query("TRUNCATE movies")
      .then((err, res) => {
        return err ? err : res;
      });
  }
}

module.exports = Movie;