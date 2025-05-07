import mongoose from "mongoose";

const toolsSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    image_url: {
        type: String,
        require:true,
    }

})

const Tool = mongoose.model("Tools", toolsSchema);

export default Tool;