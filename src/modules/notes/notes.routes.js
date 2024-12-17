import express from 'express';
import { addNote, updateNote } from './notes.controler.js';

const notesRouter = express.Router();
notesRouter.post('/',addNote);
notesRouter.put('/',updateNote);
export default notesRouter;