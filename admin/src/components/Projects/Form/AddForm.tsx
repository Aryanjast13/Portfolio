import FileUpload from "@/components/FileUpload/FileUpload";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/store/hooks/hooks";
import { addProject } from "@/store/slices/projectSlice";
import React, { useState } from "react";
import { toast } from "sonner";



export function AddForm({ isFormOpen, setIsFormOpen,title ,description,setFormData}: any) {
   const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null);
 

  const handleSubmit =async  (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please select a file to upload");
      return;
    }

    const data = new FormData();
    data.append("image", imageFile);
    data.append("title", title);
    data.append("description",description);

    
    const response = await dispatch(addProject(data)).unwrap();
    if (response.success) {
      setImageFile(null);
      setFormData({ title: "", description: "" });
      setIsFormOpen(false)
      toast.success("project added succesfully");
    }
    
  

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogContent className="sm:max-w-[425px] bg-[#171821]/90 border-none text-white">
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              className="col-span-3 border-slate-700"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              name="description"
              className="col-span-3 border-slate-700"
              value={
                description
              }
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <FileUpload imageFile={imageFile} setImageFile={setImageFile} />
        </div>

        <DialogFooter>
          <Button variant={"darkSlate"} type="submit" onClick={handleSubmit}>
            Add Project
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
