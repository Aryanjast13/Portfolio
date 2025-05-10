import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
    },
    publicId: {
        type: String,
        require:true
  },
  image_url: {
    type: String,
    require:true,
  },
});

const ProjectModel = mongoose.model("Project", projectSchema);
export default ProjectModel;