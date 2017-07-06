const mongoose = require('mongoose');
const food = require('../models/foods');

function getAll(req, res) {
  food.find({}, function(err, response) {
    if (err) console.log(err);
    else res.send(response)
  })
}

function getOne(req, res) {
  console.log(req.params.id);
  food.findOne({
    _id: req.params.id
  }, function(err, response) {
    if (err) console.log(err);
    else res.send(response)
  })
}

function create(req, res) {
  food.create({
    name: req.body.name,
    price: req.body.price
  }, function(err, response) {
    if (err) console.log(err);
    else res.send(response)
  })
}

function update(req, res) {
  food.updateOne({
    _id: req.params.id
  }, {
    name: req.body.name,
    price: req.body.price
  }, function(err, response) {
    if (err) console.log(err);
    else res.send(response)
  })
}

function deleteOne(req, res) {
  food.remove({
    _id: req.params.id
  }, function(err, response) {
    if (err) console.log(err);
    else res.send(response)
  })
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne
}
