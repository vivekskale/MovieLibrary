const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const dotenv = require("dotenv").config();

const client_key = process.env.CLIENT_KEY;

// Function for getting popular movies
async function getPopular(page) {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${client_key}&language=en-US&page=${page}`
  );
  let data = await response.json();
  return data;
}

// @route   GET api/getPopularMovies
// @desc    Gets popular movies from "The Movie Database" - https://developers.themoviedb.org/3
// @access  Public

// Route for getting popular movies

router.get("/", (req, res) => {
  const pageNum = req.query.pagenum;
  console.log(
    `request recieved by server for popular movies, page ${req.query.pagenum}`
  );
  getPopular(pageNum).then(data => {
    console.log(data);
    res.send({ response: data });
  });
});

module.exports = router;