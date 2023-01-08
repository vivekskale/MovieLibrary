# The Movie Database

Live here: https://hire-me-jumbo.herokuapp.com/ 

## Tech Stack

This project is built using the following technologies:
- Node.js 
- Express
- React

While this project could have been possible with a simple React frontend this would come with security risks as the API key would have needed to be stored somewhere on the front end. For this reason I have created a simple API using node that receives requests from React and grabs data from the Movie Database API.

## Server Setup

The server is setup using express. The `routes/api` folder contains the different endpoints used in this App:
- GetConfiguration;
- GetMoviesSearch;
- GetPopularMovies;
- GetSingleMovie;

Each of these endpoints make a different sort of request to the Movie Database API. The API key is stored as a local environment variable. I have used a libary called `node-fetch` to handle making API calls on the server side. This library allows the use of the fetch API on the server side, which keeps things consistent with the front end. I've also made use of `async/await` to keep the code nice and clean (and make use of some shiny new ES6!).

## React Setup

The main tools that I have used in building the client side are:
- React Router;
- Node-Sass;
- Reactstrap;
- Date-fns;

I have tried to keep this list as minimal as possible to ensure that the app remains lightweight. React Router handles all the urls and browser history. Node-Sass allows the user to write and compile SASS for neater CSS. Reactstrap brings bootstrap to react for fast and consistent prototyping. Date-fns is a lightweight date-handling library.

While some of these libraries might not be strictly necesary right now (for example I could have written a function to handle the date formatting) for the interests of scalability a lightweight library can be a good solution. 

## Extras! 

I have implemented a few extra features.

1. Next/Previous buttons

You can navigate through the pages of Popular Movies.

2. 404 Pages

Non-valid URLs will direct to a custom 404 page rather than simply failing.






