const Movie = require('../models/content.model');
const utils = require('../utilities/utils');

const ContentController = {

  getOneMovie: (id) => {
    try{
      Movie.getMovieById(id).then(res => {
        
      })
    } catch(err) {
      utils.errMsg(err);
    }
  }
}

module.exports = ContentController;