const express = require("express")
const router = express.Router();
const AuthController = require('../controllers/auth.controller');
const ContentController = require('../controllers/content.controller');

router.get("/", (req, res) => {
  res.status(200).json({ 
    status: 1,
    message: "Pong!"
  });
});

router.route("/auth")
      .get(AuthController.logout)
      .post(AuthController.login)
      .put(AuthController.signUp);

router.route("/movies")
      .get(ContentController.getAllMovies)
      .post(ContentController.addMovie)
      .put(ContentController.updateMovie)
      .delete(ContentController.deleteAllMovies);

router.route("/movies/:id")
      .get(ContentController.getOneMovie)
      .delete(ContentController.deleteMovie);

module.exports = router;