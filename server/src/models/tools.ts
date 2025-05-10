import mongoose from "mongoose";

const toolsSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    image_url: {
        type: String,
        require:true,
    },
    publicId: {
        type: String,
        require:true,
    }

})

const ToolModel = mongoose.model("Tools", toolsSchema);

export default ToolModel;