const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/movies', (req, res) => {
    Movie.find().then((movieFromDb) => {
        res.render('movies', {movies: movieFromDb})
    })
});

router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    Movie.findById(movieId).then((movieFromDb) => {
        res.render('movies', { movies: movieFromDb })
    });
});

// router.get('/movie-details', (req, res) => {
//     Movie.find().then((movieFromDb) => {
//         res.render('movie-details', {movies: movieFromDb})
//     })
// });


router.get('/movie-details/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    Movie.findById(movieId).then((movieFromDb) => {
        res.render('movie-details', { movie: movieFromDb })
    });
});

module.exports = router;