const router = require("express").Router();

const Users = require("./user-model.js");

// Routes
router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get users" });
    });
});

module.exports = router;
