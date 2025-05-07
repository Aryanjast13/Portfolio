import express ,{Request,Response} from "express";

const router = express.Router();

router.post("/",(req:Request,res:Response)=>{})
router.get("/",(req:Request,res:Response)=>{})
router.put("/:id",(req:Request,res:Response)=>{})
router.delete("/:id",(req:Request,res:Response)=>{})


export default router;

