import express from "express";
const router = express.Router();
import {
  becomeInstructor,
  getInstructorById,
  deleteInstructorById,
} from "../controllers/instructorCont.js";

router.post('/becomeInstructor', becomeInstructor);
router.get('/:id', getInstructorById);
router.delete('/:id', deleteInstructorById);

export default router; 