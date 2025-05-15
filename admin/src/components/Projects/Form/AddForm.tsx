import FileUpload from "@/components/FileUpload/FileUpload";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFileUpload } from "@/hooks/use-file-upload";
import { useState } from "react";

export function AddForm({ isFormOpen, setIsFormOpen }: any) {
    const [imageFile, setImageFile] = useState<File | null>(null);
    
    console.log(imageFile)
    

  return (
    <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
      <DialogContent className="sm:max-w-[425px] bg-[#171821]/90 border-none text-white">
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name" className="col-span-3 border-slate-700" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Input id="username" className="col-span-3 border-slate-700" />
          </div>
        </div>
        <div>
          <FileUpload imageFile={imageFile} setImageFile={setImageFile}/>
        </div>

        <DialogFooter>
          <Button variant={"darkSlate"} type="submit">
            Add Project
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
