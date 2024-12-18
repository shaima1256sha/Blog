import { notesModel } from "../../../models/notes.model.js";

const addNote = async (req, res) => {
  const { title, description, createdBy } = req.body;
  await notesModel.insertMany({
    title,
    description,
    createdBy,
  });
  res.json({ message: "success" });
};
const updateNote = async (req, res) => {
  const { title, description, id } = req.body;
  let note = await notesModel.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );
  if (!note) return res.json({ message: "note not found" });
  res.json({ message: "success", note });
};
const deleteNote = async (req, res) => {
  const { id } = req.body;
  let note = await notesModel.findByIdAndDelete(id);
  if (!note) return res.json({ message: "note not found" });
  res.json({ message: "success", note });
};
const getAllNote = async (req, res) => {
  const { id } = req.body;
  let note = await notesModel.find({}).populate('createdBy','name-_id');

  res.json({ message: "success", note });
};
const getUserNote = async (req, res) => {
  const { id } = req.body;
  const { createdBy } = req.params;
  let note = await notesModel.find({createdBy});

  res.json({ message: "success", note });
};
export { addNote, updateNote, deleteNote ,getAllNote,getUserNote,notesModel};
