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
import {
  addProject,
  editProject,
  removeState,
  setState,
} from "@/store/slices/projectSlice";
import { Description } from "@radix-ui/react-dialog";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

export function AddForm({
  isFormOpen,
  setIsFormOpen,
  imageFile,
  setImageFile,
  edit,
  setEditing,
}: any) {
  const { formData } = useAppSelector((store) => store.project);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please select a file to upload");
      return;
    }
    setIsLoading(true);
    try {
      const data = new FormData();
      data.append("image", imageFile);
      data.append("title", formData.title);
      data.append("description", formData.description);

      if (formData.title.length > 3 && formData.description.length > 3) {
        const { success } = await dispatch(addProject(data)).unwrap();
        if (success) {
          toast.success("project added successfully");
          dispatch(removeState());
          setImageFile(null);
          setIsFormOpen(false);
        }
      } else {
        alert("please add the title and description ");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(formData.id);
  const handleEditSumbit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const data = new FormData();
      data.append("id", formData.id);
      data.append("image", imageFile);
      data.append("title", formData.title);
      data.append("description", formData.description);

      if (formData.title.length > 3 && formData.description.length > 3) {
        const { success } = await dispatch(editProject(data)).unwrap();
        if (success) {
          toast.success("project edited successfully");
          dispatch(removeState());
          setImageFile(null);
          setIsFormOpen(false);
        }
      } else {
        alert("please add the title and description ");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch(
      setState({
        ...formData,
        [name]: value,
      })
    );
  };

  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogContent className="sm:max-w-[425px] bg-[#171821]/90 border-none text-white">
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
        </DialogHeader>
        <Description className="sr-only">
          Add title and description and image
        </Description>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              className="col-span-3 border-slate-700"
              value={formData.title}
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
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <FileUpload imageFile={imageFile} setImageFile={setImageFile} />
        </div>

        <DialogFooter>
          <Button
            variant={"darkSlate"}
            type="submit"
            onClick={edit ? handleEditSumbit : handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader className="animate-spin" />
                <span>{edit ? "editing..." : "adding..."}</span>
              </>
            ) : (
              <span>{edit ? "edit Project" : "add Project"}</span>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
