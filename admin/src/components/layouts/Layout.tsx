import { Link, Outlet } from "react-router";


const SideBar = () => {
  return (
    <>
      <div className="bg-stone-400 w-1/7 rounded-xl h-full p-2 mr-3">
        <div className=" mt-30 w-full">
          <div className="flex flex-col gap-2 items-center w-full h-fit justify-center text-lg ">
            <button className="transition-colors w-full rounded-md py-1  hover:bg-black hover:text-white">
              <Link to="/">Home</Link>
            </button>

            <button className="transition-normal rounded-xl w-full py-1 hover:bg-black hover:text-white">
              <Link to="projects"> Projects</Link>
            </button>

            <button className="transition-colors rounded-xl w-full py-1 hover:bg-black hover:text-white">
              <Link to="tools"> Tools </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Layout = () => {
  return (
    <>
      <div className=" h-dvh w-full flex bg-gray-800 p-4 ">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout