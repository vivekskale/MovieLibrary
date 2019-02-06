const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Set up routes
const getPopularMovies = require("./routes/api/getPopularMovies");
const getConfiguration = require("./routes/api/getConfiguration");
const getMoviesSearch = require("./routes/api/getMoviesSearch");
const getSingleMovie = require("./routes/api/getSingleMovie");

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/getPopularMovies", getPopularMovies);
app.use("/api/getConfiguration", getConfiguration);
app.use("/api/getMoviesSearch", getMoviesSearch);
app.use("/api/getSingleMovie", getSingleMovie);


// Setting up local and live server configuration
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// TESTING SERVER

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});
app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
