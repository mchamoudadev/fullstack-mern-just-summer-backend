const { Projects, Categories } = require("../models/projects");

export const registerCategory = async (req, res) => {
    try {
        const category = await new Categories(req.body).save();
        res.send(category);
    } catch (err) {
        console.log(err);
    }
};