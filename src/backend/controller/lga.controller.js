const db = require("../config/db.config");
const Lga = db.lga;

// Add LGA
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      messege: "Please fill all  input fields",
    });
  } else {
    // Save LGA
    const lga = new Lga(req.body);
    lga
      .save()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Not saved",
        });
      });
  }
};

// Get all LGAs
exports.findAll = (req, res) => {
  Lga.findAll()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};