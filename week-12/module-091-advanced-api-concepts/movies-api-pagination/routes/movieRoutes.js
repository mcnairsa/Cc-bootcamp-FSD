const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

// GET /movies - Get all movies with pagination and filtering
router.get("/", movieController.getAllMovies);

// GET /movies/:id - Get single movie by ID
router.get("/:id", movieController.getMovieById);

module.exports = router;
