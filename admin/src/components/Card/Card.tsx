import { useAppDispatch } from "@/store/hooks/hooks";
import { deleteProject, setState, } from "@/store/slices/projectSlice";
import { Button } from "../ui/button";


const Card = ({
  title,
  description,
  image_url,
  id,
  setIsFormOpen,
  setEditing,
}: any) => {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    setIsFormOpen(true);
    dispatch(setState({ id, title, description, image_url }));
    setEditing(true);
  };

  const handleDelete = () => {
    dispatch(deleteProject(id));
  };
  return (
    <div className="w-48 h-fit border   rounded-lg shadow-sm bg-[#161A30] border-gray-700 p-2">
      <img className="rounded-md w-44" src={image_url} alt="" />

      <div className="p-2  ">
        <h1 className="mb-1 text-[.8rem] text-white break-words">{title}</h1>

        <p className="text-[.6rem] font-normal text-gray-400 break-words">
          {description.slice(1, 4).trim()}
        </p>
      </div>
      <div className="flex justify-end gap-2 px-2">
        <Button size={"card"} variant={"edit"} onClick={handleEdit}>
          Edit
        </Button>
        <Button size={"card"} variant={"delete"} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Card