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
import { addTool, editTool, getTool, removeState, setState } from "@/store/slices/toolsSlice";
import { Description } from "@radix-ui/react-dialog";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

export function AddToolForm({
  isFormOpen,
  setIsFormOpen,
  imageFile,
  setImageFile,
  edit,
}: any) {
  const { formData } = useAppSelector((store) => store.tool);
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
      data.append("name", formData.name);

      if (formData.name.length > 1) {
        const { success } = await dispatch(addTool(data)).unwrap();
        if (success) {
          dispatch(getTool());
          toast.success("tool added successfully");
          dispatch(removeState());
          setImageFile(null);
          setIsFormOpen(false);
        }
      } else {
        alert("please add the name ");
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
      data.append("name", formData.name);

      if (formData.name.length > 1) {
        const { success } = await dispatch(editTool(data)).unwrap();
        if (success) {
          dispatch(getTool());
          toast.success("Tool edited successfully");
          dispatch(removeState());
          setImageFile(null);
          setIsFormOpen(false);
        }
      } else {
        alert("please add the name ");
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
          <DialogTitle>Add Tool</DialogTitle>
        </DialogHeader>
        <Description className="sr-only">
          Add name  and image
        </Description>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              name
            </Label>
            <Input
              id="name"
              name="name"
              className="col-span-3 border-slate-700"
              value={formData.name}
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
              <span>{edit ? "edit Tool" : "add Tool"}</span>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
