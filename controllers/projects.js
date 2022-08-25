const { Projects, Categories } = require("../models/projects");

// const { Course, Section } = require("../models/course");

export const registerProject = async (req, res) => {
    try {
        const { title, description, budget, company, category } = req.body;
        const projects = await new Projects({ title, description, budget, company, category }).save();
        res.json({ "status": true, "message": projects });
    } catch (err) {
        console.log(err);
        res.send({ "status": false, "message": err });
    }
};

export const updateProject = async (req, res) => {
    try {

        // when you have one the properties
        // const project = await Projects.findOneAndUpdate({ company: "Jtech" }, { title, description, budget });

        const { title, description, budget, company, _id } = req.body;
        const project = await Projects.findByIdAndUpdate(_id, { title, description, budget, company });

        res.send({ "status": true, "project": project });
    } catch (err) {
        res.send({ "status": false, "message": err });
    }
};


export const deleteProject = async (req, res) => {
    try {
        const { _id } = req.params;
        console.log(_id);
        const deleteProjectById = await Projects.findByIdAndDelete(_id);
        res.send({ "status": true, "message": deleteProjectById });

    } catch (err) {
        res.send({ "status": false, "message": err });
    }
};

export const getProject = async (req, res) => {
    try {
        const { _id } = req.params;
        const project = await Projects.findById(_id);
        res.send({ "status": true, "message": project });
    } catch (err) {
        res.send({ "status": false, "message": err });
    }
};

export const getAllProjects = async (req, res) => {
    try {
        const allProject = await Projects.find().populate("category").sort({ 'createdAt': -1 });
        res.send({ "status": true, "message": allProject });
    } catch (err) {
        console.log(err);
    }
};