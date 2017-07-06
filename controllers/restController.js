const mongoose = require('mongoose');
const restaurant = require('../models/restaurants');

function getAll(req, res) {
  restaurant.find({}, function(err, response) {
    if (err) console.log(err);
    else res.send(response)
  })
}

function getOne(req, res) {
  console.log(req.params.id);
  restaurant.findOne({
    _id: req.params.id
  }, function(err, response) {
    if (err) console.log(err);
    else res.send(response)
  })
}

function create(req, res) {
  restaurant.create({
    name: req.body.name,
    owner: req.body.owner,
    address: req.body.address
  }, function(err, response) {
    if (err) console.log(err);
    else res.send(response)
  })
}

function update(req, res) {
  restaurant.updateOne({
    _id: req.params.id
  }, {
    name: req.body.name,
    owner: req.body.owner,
    address: req.body.address
  }, function(err, response) {
    if (err) console.log(err);
    else res.send(response)
  })
}

function deleteOne(req, res) {
  restaurant.remove({
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
