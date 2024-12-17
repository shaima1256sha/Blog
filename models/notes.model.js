import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
  title: String,
  description: String,
  createdBy: mongoose.SchemaTypes.ObjectId
});

export const notesModel = mongoose.model('note', notesSchema);
