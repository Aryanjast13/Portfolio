import Card from "@/components/Card/Card";
import { AddForm } from "@/components/Projects/Form/AddForm";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { getProject, removeState } from "@/store/slices/projectSlice";
import { useEffect, useState } from "react";


const Projects = () => {
  const { projects } = useAppSelector((store) => store.project);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleFormToggle = () => {
    dispatch(removeState());
    setIsFormOpen(true);
  };

  useEffect(() => {
    dispatch(getProject());
  }, []);

  return (
    <div className="w-full h-full flex gap-4 p-4 flex-wrap bg-[#171821] text-slate-700 rounded-xl  relative overflow-y-scroll">
      <div className="fixed top-6 right-10">
        <Button variant={"darkSlate"} onClick={handleFormToggle}>
          add Project
        </Button>
        <AddForm
          isFormOpen={isFormOpen}
          setIsFormOpen={setIsFormOpen}
        />
      </div>
      {projects.map((c: any) => (
        <Card
          key={c._id}
          title={c?.title}
          description={c?.description}
          image_url={c?.image_url}
          id={c._id}
          setIsFormOpen={setIsFormOpen}
        />
      ))}
    </div>
  );
};

export default Projects;
