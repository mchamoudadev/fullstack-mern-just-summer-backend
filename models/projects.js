import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;
// title , description, budegt 
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    budget: {
        type: Number
    },
    company: {
        type: String
    },
    category: {
        type: ObjectId,
        ref: "Categories"
    }
}, { timestamps: true });

const categoriesSchema = new mongoose.Schema({
    title: { type: String },
    status: { type: String, default: true }
});

const projects = mongoose.model("Projects", projectSchema);


const categories = mongoose.model("Categories", categoriesSchema);


module.exports = { Projects: projects, Categories: categories };

