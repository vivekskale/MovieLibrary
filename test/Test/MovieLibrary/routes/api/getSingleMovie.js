const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const dotenv = require("dotenv").config();

const client_key = process.env.CLIENT_KEY;

// Function for getting popular movies
async function getMovie(id) {
    let response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${client_key}&language=en-US`
    );
    let data = await response.json();
    return data;
}

// @route   GET api/getSingleMovie
// @desc    Gets popular movies from "The Movie Database" - https://developers.themoviedb.org/3

// Route for getting popular movies

router.get("/", (req, res) => {
    const id = req.query.id;
    getMovie(id).then(data => {
        res.send({ response: data });
    });
});

module.exports = router;