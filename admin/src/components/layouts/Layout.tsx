import { Link, Outlet } from "react-router";


const SideBar = () => {
    return (
      <>
        <div className="bg-gray-100 w-30 rounded-xl h-full p-2">
          <div className=" mt-30">
            <ul className="grid items-center justify-center ">
              <Link to="/">
           
                <li className="transition-colors rounded-md xl px-6 py-1 hover:bg-black hover:text-white">
                  Home
                </li>
              </Link>
              <Link to="projects">
              
                <li className="transition-normal rounded-xl px-6 py-1 hover:bg-black hover:text-white">
                  Projects
                </li>
              </Link>
              <Link to="tools">
             
                <li className="transition-colors rounded-xl px-6 py-1 hover:bg-black hover:text-white">
                Tools
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </>
    );
}


const Layout = () => {
    return (
      <>
        <div className=" h-dvh w-dvw bg-gray-800 p-3">
         <div className="h-full w-full  bg-white/5 backdrop-blur-lg rounded-xl p-2  ">
            <SideBar />
            <Outlet />
          </div>
        </div>
      </>
    );
}

export default Layout