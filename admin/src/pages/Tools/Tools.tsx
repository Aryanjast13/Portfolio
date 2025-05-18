import List from "@/components/List/List";
import { AddToolForm } from "@/components/Projects/Form/addToolForm";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { removeState } from "@/store/slices/projectSlice";
import { getTool } from "@/store/slices/toolsSlice";
import { useEffect, useState } from "react";

export const Tools = () => {
  const { tools } = useAppSelector((store) => store.tool);
  console.log(tools);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [edit, setEditing] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleFormToggle = () => {
    setEditing(false);
    dispatch(removeState());
    setIsFormOpen(true);
  };

  useEffect(() => {
    dispatch(getTool());
  }, []);

  return (
    <div className="w-full h-full p-4 bg-[#171821] text-slate-700 rounded-xl overflow-y-scroll">
      <div className="flex justify-between mb-4">
        <div>Search</div>
        <Button variant={"darkSlate"} onClick={handleFormToggle}>
          add Tool
        </Button>
        <AddToolForm
          isFormOpen={isFormOpen}
          setIsFormOpen={setIsFormOpen}
          imageFile={imageFile}
          setImageFile={setImageFile}
          edit={edit}
          setEditing={setEditing}
        />
      </div>
      {tools.map((c: any) => (
        <List
          key={c._id}
          name={c?.name}
          image_url={c?.image_url}
          id={c._id}
          setIsFormOpen={setIsFormOpen}
          setEditing={setEditing}
        />
      ))}
    </div>
  );
};
