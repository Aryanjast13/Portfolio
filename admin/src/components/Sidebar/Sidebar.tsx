import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { logout } from "@/store/slices/authslice";
import { setExpanded } from "@/store/slices/sidebarSlice";
import {
  ChevronFirst,
  ChevronLast,
  LogOut
} from "lucide-react";
import { Link } from "react-router";

export function Sidebar({ children }: any) {
  const expanded = useAppSelector((store) => store.sidebar.expanded);
  const { user } = useAppSelector(store => store.auth) ;

  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout())
  }
  

  return (
    <aside className="h-full">
      <nav className="h-full flex flex-col bg-[#171821] border-r border-[#24242d] rounded-xl">
        <div className="p-4 pb-2 flex w-full items-center justify-end">
          <button
            onClick={() => dispatch(setExpanded())}
            className="p-1.5 rounded-lg bg-gray-700 hover:bg-gray-500"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <ul className="flex-1 px-3 ">{children}</ul>

        <div className=" border-t border-slate-700 flex p-3">
          <div
            className={`
                flex  items-center
                overflow-hidden transition-all ${
                  expanded ? "w-52 ml-3 justify-between" : "w-full justify-center "
                }
            `}
          >
            {expanded && (
              <div className="leading-4 text-slate-600 ">
                <h4 className="font-semibold text-lg">{user?.name}</h4>
                <span className=" text-gray-600 text-sm">{user.email}</span>
              </div>
            )}
            <LogOut
              size={20}
              className="text-slate-600 hover:text-slate-400"
              onClick={handleLogout}
            />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }: any) {
  const expanded = useAppSelector((store) => store.sidebar.expanded);

  return (
    <Link to={text == "Home" ? "/" : text}>
      <li
        className={`
          relative flex items-center py-2 px-2 my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${
            active
              ? "bg-gradient-to-tr from-gray-400 to-gray-600 text-gray-800"
              : "hover:bg-gradient-to-tr from-gray-300 to-gray-500 text-slate-600"
          }
      `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
