import { v2 as cloudinary } from "cloudinary";
import { Request, RequestHandler, Response } from "express";
import ToolModel from "../models/tools";
import { StatusCodes } from "../types/statusCodes";
import uploadToCloudinary from "../utils/cloudinaryConfig";
import { toolsSchema } from "../validation/input_validation";

const addTool: RequestHandler = async (req:Request,res:Response) => {
    try {
      const { title} = req.body;

      if (!toolsSchema.safeParse(req.body).success) {
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

      const projectdata = await ToolModel.create({
        title,
        image_url,
        publicId,
      });

      if (!projectdata.title === title) {
        res
          .status(StatusCodes.BadRequest)
          .json({ success: false, message: "data is not stored" });
        return;
      }

      res.status(StatusCodes.OK).json({ message: "uploaded", data: projectdata });
    } catch (error) {
      res
        .status(StatusCodes.InternalServerError)
        .json({ success: false, message: "upload failed" });
        console.log(error);
    }
}

const getTools: RequestHandler = async (req: Request, res: Response) => {
     try {
            const data = await ToolModel.find({});
            res.status(StatusCodes.OK).json({ success: true, data });
            
        } catch (error) {
       res.status(StatusCodes.InternalServerError).json({ success: false, message: "failed to find the projects info" });
       
        }
    
}

const editTool: RequestHandler = async (req: Request, res: Response) => {
    try {
      const { title, } = req.body;
      const id = req.params.id;

      if (!toolsSchema.safeParse(req.body).success) {
        res
          .status(StatusCodes.BadRequest)
          .json({ success: false, message: "Invalid request body" });
        return;
      }
      if (req.file) {
        const buffer = req?.file?.buffer as Buffer;
        const result = await uploadToCloudinary(buffer);
        const image_url = result.secure_url;
        const publicId = result.public_id;
        const projectData = await ToolModel.findByIdAndUpdate(
          { _id: id },
          { title,image_url, publicId },
          { returnDocument: "after" }
        );
        res.status(StatusCodes.OK).json({ success: true, data: projectData });
        return;
      }

      const projectData = await ToolModel.findByIdAndUpdate(
        { _id: id },
        { title },
        { returnDocument: "after" }
      );

      res.status(StatusCodes.OK).json({ success: true, data: projectData });
    } catch (error) {
      res.status(StatusCodes.InternalServerError).json({
        success: false,
        message: "failed to updated the project info",
      });
    }
}

const deleteTool: RequestHandler = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await ToolModel.findByIdAndDelete({ _id: id });
      const publicId = result?.publicId as string;
      const response = await cloudinary.uploader.destroy(publicId);
      res
        .status(StatusCodes.OK)
        .json({ success: true, message: "project info deleted" });
    } catch (error) {
      res.status(StatusCodes.InternalServerError).json({
        success: false,
        message: "failed to delete the project info",
      });
    }
    
}


export {
    addTool, deleteTool, editTool, getTools
};
