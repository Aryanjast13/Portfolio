import {  Outlet } from "react-router";
import { Sidebar, SidebarItem } from "../Sidebar/Sidebar";
import { CodeXml, FolderOpenDot, House } from "lucide-react";



const Layout = () => {
  return (
    <>
      <div className=" h-dvh w-full flex bg-gray-800 p-4 gap-4 ">
        <Sidebar>
          <SidebarItem
            icon={<House />}
            text={"Home"}
            active={true}
            alert={false}
          />
          <SidebarItem
            icon={<FolderOpenDot/>}
            text={"Projects"}
            active={false}
            alert={false}
          />
          <SidebarItem
            icon={<CodeXml />}
            text={"Tools"}
            active={false}
            alert={false}
          />
        </Sidebar>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
