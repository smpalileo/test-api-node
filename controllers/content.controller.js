const Movie = require('../models/content.model');
const utils = require('../utilities/utils');

const ContentController = {

  getOneMovie: (req, res) => {
    try{
      Movie.getMovieById(req.params.id).then(result => {
        utils.successMsg(res, result);
      })
    } catch(err) {
      utils.errMsg(res, err);
    }
  },

  getAllMovies: (req, res) => {
    try{
      Movie.getAllMovies().then(result => {
        utils.successMsg(res, result);
      })
    } catch(err) {
      utils.errMsg(res, err);
    }
  },

  addMovie: (req, res) => {
    try{
      Movie.createMovie(req).then(result => {
        utils.successMsg(res, result);
      })
    } catch(err) {
      utils.errMsg(res, err);
    }
  },

  updateMovie: (req, res) => {
    try{
      Movie.updateMovieById(req.body.id, req.body.paramsmovie).then(result => {
        utils.successMsg(res, result);
      })
    } catch(err) {
      utils.errMsg(res, err);
    }
  },

  deleteMovie: (req, res) => {
    try{
      Movie.deleteMovieById(req.params.id).then(result => {
        utils.successMsg(res, result);
      })
    } catch(err) {
      utils.errMsg(res, err);
    }
  },

  deleteAllMovies: () => {
    try{
      Movie.deleteAllMovies().then(result => {
        utils.successMsg(res, result);
      })
    } catch(err) {
      utils.errMsg(res, err);
    }
  }
}

module.exports = ContentController;