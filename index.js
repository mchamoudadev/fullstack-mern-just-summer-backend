import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import projects from './routes/projects.js';
import categories from './routes/categories.js';

// initalize
const app = express();

// middlewares
dotenv.config();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`));

mongoose.connect(process.env.MONGO_URL, (err) => {
    if (err) return console.log(`something went wrong ${err}`);
    console.log("Mongo connected successfully");
});

app.use('/api/projects', projects);
app.use('/api/categories', categories);


/*
    Routes
        register-project
            post
        update-project
            post
        read-project
            get
        read-all-projects
            get
*/
