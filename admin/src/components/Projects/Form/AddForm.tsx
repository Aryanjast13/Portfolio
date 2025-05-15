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
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { addProject } from "@/store/slices/projectSlice";
import React, { useState } from "react";

interface FormData {
  title: string;
  description: string;
}

export function AddForm({ isFormOpen, setIsFormOpen }: any) {
  const { title, description } = useAppSelector((store) => store.project);
  console.log(title,description);
  const dispatch = useAppDispatch();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [editFormData, setEditFormData] = useState<FormData>({
    title: title,
    description: description,
  });
  const [formData, setFromData] = useState<FormData>({
    title: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please select a file to upload");
      return;
    }
    console.log(formData.title);
    console.log(formData.description);
    console.log(imageFile);

    const data = new FormData();
    data.append("image", imageFile);
    data.append("title", formData?.title);
    data.append("description", formData?.description);

    console.log(data);
    dispatch(addProject(data));
    setImageFile(null);
    setFromData({ title: "", description: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFromData((prev: any) => ({ ...prev, [name]: value }));
    setEditFormData((prev: any) => ({ ...prev, [name]: value }));
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
              value={editFormData.title ? editFormData.title : formData?.title}
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
                editFormData.description
                  ? editFormData.description
                  : formData?.description
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
