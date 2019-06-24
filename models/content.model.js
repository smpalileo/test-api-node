const db = require('../db');

const Movie = {

  createMovie: (movie) => {
    db.query("INSERT INTO movies set ?", movie)
      .then((err, res)  => {
        return err ? err : res;
      });
  },

  getMovieById: (id) => {
    db.query("Select movie from movies where id = ?", id)
      .then((err, res) => {
        return err ? err : res;
      });
  },

  getAllMovies: () => {
    db.query("Select * from movies")
      .then((err, res) => {
        return err ? err : res;
      });
  },

  updateMovieById: (id, movie) => {
    db.query("UPDATE movies SET movie = ? WHERE id = ?", [movie, id])
      .then((err, res) => {
        return err ? err : res;
      });
  },

  deleteMovieById: (id) => {
    db.query("DELETE FROM tasks WHERE id = ?", id)
      .then((err, res) => {
        return err ? err : res;
      });
  }
}

module.exports = Movie;