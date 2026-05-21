const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const { createUser, getUser } = require("../controllers/userController");

router.post("/signup", createUser);
router.post("/login", getUser);

router.get(
  "/profile",
  authMiddleware,
  (req, res) => {

    res.json({
      message: "Protected route accessed",
      user: req.user
    });
  }
);

module.exports = router