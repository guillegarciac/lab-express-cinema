const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET all movies */
router.get ("/", async (req,res,next) => {
  try {
      const movies = await Movie.find({});
      res.render("movies", { movies });
  } catch (error) {
      next(error);
  }
})

module.exports = router;