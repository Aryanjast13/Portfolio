import { v2 as cloudinary } from "cloudinary";
import { Request, RequestHandler, Response } from "express";
import ProjectModel from "../models/porjects";
import { StatusCodes } from "../types/statusCodes";
import uploadToCloudinary from "../utils/cloudinaryConfig";
import { projectsSchema } from "../validation/input_validation";


const addProject: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;
      if (!projectsSchema.safeParse(req.body).success) {
        res
          .status(StatusCodes.BadRequest)
          .json({ success: false, message: "Invalid request body" });
        return;
      }
      if (!req.file) {
        res
          .status(StatusCodes.BadRequest)
          .json({ success: false, message: "Invaild request body" });
        return;
      }
      const buffer = req?.file?.buffer as Buffer;

      const result = await uploadToCloudinary(buffer);
      const image_url = result.secure_url;
      const publicId = result.public_id;

      const projectdata = await ProjectModel.create({
        title,
        description,
        image_url,
        publicId,
      });

      if (!projectdata.title === title) {
        res
          .status(StatusCodes.BadRequest)
          .json({ success: false, message: "data is not stored" });
        return;
      }

      res
        .status(StatusCodes.OK)
        .json({ message: "uploaded", data: projectdata });
    } catch (error) {
        res.status(StatusCodes.InternalServerError).json({ success: false, message: "upload failed" });   
    }
}

const getProjects: RequestHandler = async (req: Request, res: Response) => {
    try {
        const data = await ProjectModel.find({});
        res.status(StatusCodes.OK).json({ success: true, data });
        
    } catch (error) {
        res.status(StatusCodes.InternalServerError).json({ success: false, message: "failed to find the projects info" });
    }


    
}

const editProject: RequestHandler = async (req: Request, res: Response) => {
    
    try {
        const { title, description } = req.body;
        const id = req.params.id;

        if (!projectsSchema.safeParse(req.body).success) {
            res.status(StatusCodes.BadRequest).json({ success: false, message: "Invalid request body" });
            return;
        }
        if (req.file) {
            const buffer = req?.file?.buffer as Buffer;
            const result = await uploadToCloudinary(buffer);
            const image_url = result.secure_url;
            const publicId = result.public_id;
            const projectData = await ProjectModel.findByIdAndUpdate({ _id: id }, { title, description, image_url,publicId },{returnDocument:"after"});
            res.status(StatusCodes.OK).json({ success: true, data: projectData });
            return;
        }

        const projectData = await ProjectModel.findByIdAndUpdate({_id:id},{title,description},{returnDocument:"after"});
        
        res.status(StatusCodes.OK).json({ success: true, data: projectData });
        
    } catch (error) {
        res
          .status(StatusCodes.InternalServerError)
          .json({
            success: false,
              message: "failed to updated the project info",
          });
    }
}

const deleteProject: RequestHandler = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await ProjectModel.findByIdAndDelete({ _id: id });
        const publicId = result?.publicId as string;
        const response = await cloudinary.uploader.destroy(publicId);
        res.status(StatusCodes.OK).json({ success: true, message:"project info deleted" });

        
   }
    catch (error) {
        res
          .status(StatusCodes.InternalServerError)
          .json({
            success: false,
            message: "failed to delete the project info",
          });
    }
}


export {
    addProject, deleteProject, editProject, getProjects
};

