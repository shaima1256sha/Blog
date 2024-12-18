import express from 'express';
import { addNote, deleteNote, getAllNote, getUserNote, updateNote } from './notes.controler.js';

const notesRouter = express.Router();
notesRouter.post('/',addNote);
notesRouter.put('/',updateNote);
notesRouter.put('/',deleteNote);
notesRouter.get('/',getAllNote);
notesRouter.get('/:createdBy',getUserNote);
export default notesRouter;