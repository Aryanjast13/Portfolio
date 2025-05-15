import { CodeXml, FolderOpenDot, House } from "lucide-react";
import { Outlet } from "react-router";
import { Sidebar, SidebarItem } from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <div className=" h-dvh w-full flex bg-gray-800 p-4 gap-4 ">
        <Sidebar>
          <SidebarItem icon={<House />} text={"Home"} alert={false} />
          <SidebarItem
            icon={<FolderOpenDot />}
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
