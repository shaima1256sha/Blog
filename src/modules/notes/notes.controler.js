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
  await notesModel.replaceOne({createdBy:'67619ba97578f9bd2c4d3662'},{title:'newpost 3'})
  res.json({ message: "success" });
};
export { addNote,updateNote };
