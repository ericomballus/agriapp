const express = require("express");
const mongoose = require("mongoose");
const Activity = require("../models/activitie");
const router = express.Router();
router.post("/", (req, res, next) => {
  //console.log("ici tenant1", tenant1);
  Activity.create(req.body)
    .then((activitie) => {
      console.log(activitie);
      res.status(201).json({ activitie });
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

  Activity.find({})
    .sort({ $natural: -1 })
    .limit(10)
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

router.patch("/firebaseAdd", (req, res, next) => {
  console.log(req.body.id);
  Activity.findOneAndUpdate(
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

module.exports = router;
