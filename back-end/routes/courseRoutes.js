import express from "express";
const router = express.Router();
 import {createCourse,viewCourse,updateCourse,deleteCourse} from "../controllers/courseCont.js"

 router.post("/create", createCourse);
 router.get("/:id", viewCourse);
 router.put("/:id", updateCourse);
 router.delete("/:id", deleteCourse);
 
 export default router;