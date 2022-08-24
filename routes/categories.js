import express from 'express';
import { registerCategory } from '../controllers/categories.js';

const router = express.Router();

router.post("/register-category", registerCategory);
// router.post("/update-project", updateProject);
// router.delete("/delete-project/:_id", deleteProject);
// router.get("/get-project/:_id", getProject);
// router.get("/get-all-projects", getAllProjects);



export default router;