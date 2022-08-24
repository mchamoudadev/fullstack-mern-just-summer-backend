import express from 'express';
import { registerProject, updateProject, deleteProject, getProject, getAllProjects } from '../controllers/projects.js';

const router = express.Router();

router.post("/register-project", registerProject);
router.post("/update-project", updateProject);
router.delete("/delete-project/:_id", deleteProject);
router.get("/get-project/:_id", getProject);
router.get("/get-all-projects", getAllProjects);



export default router;