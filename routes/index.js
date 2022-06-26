const express = require('express');
const { route } = require('../app');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('movies', (req, res, next)=> res.render("movies"))

router.get('movies/:id', (req, res, next)=> res.send({}))

module.exports = router;
