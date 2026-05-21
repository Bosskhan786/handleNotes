const Note = require("../models/note");

async function getAllNotes(req, res) {
  try{
    const allNotes = await Note.find({ userId: req.user.id });
    return res.json(allNotes);
  }
  catch(error){
    return res.status(500).json({msg: "Error"});
  }
}

async function getNoteByTitle(req, res) {
  try {
    const note = await Note.findOne({
    title: req.params.title,
    userId: req.user.id
    });
    if (!note){
      return res.status(404).json({error: "Note not found"});
    }
    return res.json(note);
  }
  catch(error){
    return res.status(500).json({msg: "Error"});
  }
}

async function updateNote(req, res) {
  try {
    const result = await Note.findOneAndUpdate(
    {title: req.params.title, userId: req.user.id},
    { $set: req.body },
    { new: true });
    if (!result){
      return res.status(404).json({error: "Note not found"});
    }
    return res.json({ status: 'success' });
  }
  catch(error){
    return res.status(500).json({msg: "Error"});
  }
}

async function deleteNote(req, res) {
  try {
    const result = await Note.findOneAndDelete({
    title: req.params.title,
    userId: req.user.id
    });
    if (!result){
      return res.status(404).json({error: "Note not found"});
    }
    return res.json({ status: 'success' });
  }
  catch (error){
    return res.status(500).json({msg: "Error"});
  }
}

async function createNewNote(req, res) {
  try {
    const body = req.body;
    if (
      typeof body.title !== "string" ||
      typeof body.content !== "string" ||
      typeof body.category !== "string"
    )
    {
      return res.status(400).json({msg: "All fields are required!"});
    }
    const result = await Note.create({
      userId: req.user.id,
      title: body.title,
      content: body.content,
      category: body.category
    });
    return res.status(201).json(result);
  }
  catch(error){
    return res.status(500).json({msg: "Error"});
  }
}

module.exports = {
  getAllNotes,
  getNoteByTitle,
  updateNote,
  deleteNote,
  createNewNote,
}