import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique:true,
    },
    description: {
        type: String,
        require: true,
        unique:true,
    },
    image_url: {
        type: String,
        require:true,
    }

})

const Project = mongoose.model("Project", projectSchema);
export default Project;