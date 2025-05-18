import { useAppDispatch } from "@/store/hooks/hooks";
import { deleteProject, getProject, setState, } from "@/store/slices/projectSlice";
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

  const handleDelete = async () => {
    const { success } = await dispatch(deleteProject(id)).unwrap();
    if (success) {
      dispatch(getProject());
    }
    
  };
  return (
    <div className="w-56  h-80  border   rounded-lg shadow-sm bg-[#161A30] border-gray-700 p-2">
      <img
        className="rounded-md w-52 h-44 object-cover"
        src={image_url}
        alt=""
      />

      <div className="p-2 pt-4  ">
        <h1 className="mb-1 text-[1.2rem] text-white break-words">{title}</h1>

        <p className="text-[.8rem] font-normal text-gray-400 break-words">
          {description.slice(1, 40).trim()}
        </p>
      </div>
      <div className="flex justify-center  gap-2 px-2 pt-2">
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