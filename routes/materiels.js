const express = require("express");
const mongoose = require("mongoose");
const Materiel = require("../models/materiel");
const router = express.Router();
router.post("/", (req, res, next) => {
  //console.log("ici tenant1", tenant1);
  Materiel.create(req.body)
    .then((materiel) => {
      console.log(materiel);
      res.status(201).json(materiel);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/", (req, res, next) => {
  //Product.find({ adminId: req.params.numid }, "-__v")
  // req.test3.subleaseMiddleware();

  Materiel.find({ display: true })
    .sort({ $natural: -1 })
    .lean()
    .exec((err, docs) => {
      if (err) {
        res.status(500).json({
          error: err,
        });
      }

      res.json(docs);
    });
});
router.patch("/", (req, res, next) => {
  console.log(req.body._id);
  Materiel.findOneAndUpdate(
    { _id: req.body._id },
    { $set: req.body },
    { new: true },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        res.status(201).json(success);
      }
    }
  ).catch((err) => {
    res.status(400).json({
      error: err,
    });
  });
});
router.patch("/firebaseAdd", (req, res, next) => {
  console.log(req.body.id);
  Materiel.findOneAndUpdate(
    { _id: req.body.id },
    { $set: { firebaseAdd: req.body.status } },
    { new: true },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        res.status(201).json(success);
      }
    }
  ).catch((err) => {
    res.status(400).json({
      error: err,
    });
  });
});
router.delete("/firebaseAdd/:id", (req, res, next) => {
  // console.log(req.body);

  Materiel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { display: false } },
    { new: true },
    function (error, success) {
      if (error) {
        console.log(error);
      } else {
        res.status(201).json(success);
      }
    }
  ).catch((err) => {
    res.status(400).json({
      error: err,
    });
  });
});

module.exports = router;
