import { AddForm } from "@/components/Projects/Form/AddForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const handleFormToggle = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="w-full h-full bg-[#171821] text-slate-700 rounded-xl p-2">
      <div className="flex justify-end">
        <Button variant={"darkSlate"} onClick={handleFormToggle}>
          add Project
        </Button>
        <AddForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      </div>
    </div>
  );
};

export default Projects;
