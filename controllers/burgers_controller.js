var express = require('express');
var router = express.Router();

var db = require('../models');

router.get('/', function(req, res) {
  db.burgers.findAll().then(function(result) {
    object = {burgers:result}
    res.render('index', object)
  });
});

router.post('/burgers', function(req, res) {
  db.burgers.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function() {
    res.redirect('/')
  })
});

router.put('/burgers/:id', function(req, res) {
  db.burgers.update({
    devoured: true
  },{
    where: {id: req.params.id}
  }).then(function() {
    res.redirect('/')
  })
});


module.exports = router;