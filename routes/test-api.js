const express = require("express")
const router = express.Router();
const jwt = require('jsonwebtoken');
const AuthController = require('../controllers/auth.controller');
const ContentController = require('../controllers/content.controller');

router.get("/", (req, res) => {
  res.status(200).json({ 
    status: 1,
    message: "Pong!"
  });
});

router.get("/logout", AuthController.logout)
      .post("/login", AuthController.login);

module.exports = router;