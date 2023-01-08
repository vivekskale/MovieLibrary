const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const dotenv = require("dotenv").config();

const client_key = process.env.CLIENT_KEY;
const includeAdult = false;


// Function for getting movies via search input
async function getMoviesSearch(query) {
    let response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${client_key}&language=en-US&page=1&include_adult=${includeAdult}&query=${query}`
    );
    let data = await response.json();
    return data;
}

// @route   GET api/getMoviesSearch
// @desc    Get movies based on search input from "The Movie Database" - https://developers.themoviedb.org/3

// Route for getting API Configuration

router.get("/", (req, res) => {
    const query = req.query.query;
    getMoviesSearch(query).then(data => {
        res.send({ response: data });
    });
});

module.exports = router;