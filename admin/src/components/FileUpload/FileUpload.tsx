import { UploadCloud, X } from "lucide-react";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export type UploadedImage = {
  url: string;
  public_id: string;
};

type ImageUploadProps = {
  setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
  imageFile: File | null;
};

const FileUpload: React.FC<ImageUploadProps> = ({
  setImageFile,
  imageFile,
}) => {
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };


  return (
    <div className="mx-auto mt-4 w-full max-w-md">
      <div className="flex justify-between">
        <Label className="my-4 block font-semibold">Upload Image</Label>
 
          <Button
            variant="ghost"
            className="cursor-pointer p-0 hover:bg-transparent "
            onClick={() => {
              setImageFile(null);
              setPreviewUrl(null);
            }}
          >
            <X className="size-5 text-red-500" />
            <span className="sr-only">Remove image</span>
          </Button>
       
      </div>
      <div
        className="border-muted-foreground/50 rounded-md border-2 border-dashed"
        onDragOver={!imageFile ? handleDragOver : undefined}
        onDrop={!imageFile ? handleDrop : undefined}
      >
        <Input
          type="file"
          id="image-upload"
          name="image"
          className="hidden"
          onChange={handleImageUpload}
          accept="image/*"
          ref={inputRef}
        />
        {!imageFile ? (
          <Label
            htmlFor="image-upload"
            className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md"
          >
            <UploadCloud className="text-muted-foreground size-10" />
            <span className="text-muted-foreground">
              Drag & drop or click to upload
            </span>
          </Label>
        ) : (
          <div className="p-2">
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-40 w-full   rounded-md object-cover"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
