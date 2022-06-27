const express = require('express');
const app = require('../app');
const { route } = require('../app');
const router = express.Router();
const Movies = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next)=> {
  Movies.find()
  .then((response)=>{
    console.log(response)
    res.render("movies", {response})
    })
  })
    

router.get('/movies/:id', (req, res, next)=> res.send({}))

module.exports = router;
