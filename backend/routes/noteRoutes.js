const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

const {
  getAllNotes, getNoteByTitle, updateNote, deleteNote, createNewNote
} = require("../controllers/noteController");

router.route("/")
  .get(authMiddleware, getAllNotes)
  .post(authMiddleware, createNewNote)

router.route("/:title")
  .get(authMiddleware, getNoteByTitle)
  .patch(authMiddleware, updateNote)
  .delete(authMiddleware, deleteNote)

module.exports = router;