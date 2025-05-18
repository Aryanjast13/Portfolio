import { useAppDispatch } from "@/store/hooks/hooks";
import { Edit2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { deleteTool, getTool, setState } from "@/store/slices/toolsSlice";

const List = ({ name,
    image_url,
    id,
    setIsFormOpen,
    setEditing, }: any) => {
    const dispatch = useAppDispatch();
    
    const handleEdit = () => {
        setIsFormOpen(true);
        dispatch(setState({ id, name, image_url }));
        setEditing(true);
    };
    
    const handleDelete = async () => {
        const { success } = await dispatch(deleteTool(id)).unwrap();
        if (success) {
            dispatch(getTool());
        }
    }
        
        return (
          <div className="w-full  h-fit  border flex  justify-between rounded-lg shadow-sm bg-[#161A30] border-gray-700 p-2">
            <div className="flex gap-4 ">
              <img
                className="rounded-md w-20 object-cover"
                src={image_url}
                alt=""
              />

              <h1 className="text-3xl text-white break-words">
                {name}
              </h1>
            </div>
            <div className="flex justify-center  items-center gap-2 px-2 ">
              <Button
                size={"card"}
                variant={"edit"}
                className="py-2"
                onClick={handleEdit}
              >
                <Edit2 />
              </Button>
              <Button
                size={"card"}
                variant={"delete"}
                className="py-2"
                onClick={handleDelete}
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        );
    }


    export default List;