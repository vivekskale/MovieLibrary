const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const dotenv = require("dotenv").config();

const client_key = process.env.CLIENT_KEY;

// Function for getting popular movies
async function getConfig() {
    let response = await fetch(
        `https://api.themoviedb.org/3/configuration?api_key=${client_key}`
    );
    let data = await response.json();
    return data;
}

// @route   GET api/getConfiguration
// @desc    Get API configuration from "The Movie Database" - https://developers.themoviedb.org/3
// @access  Public

// Route for getting API Configuration

router.get("/", (req, res) => {
    getConfig().then(data => {
        res.send({ response: data });
    });
});

module.exports = router;