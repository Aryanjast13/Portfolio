import { Route, Routes } from "react-router";
import CheckAuth from "./components/auth/CheckAuth";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home.tsx/Home";
import Login from "./pages/Login/Login";
import Projects from "./pages/Projects/Projects";
import { Tools } from "./pages/Tools/Tools";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { checkAuth } from "./store/slices/authslice";
import { Loader } from "lucide-react";

function App() {
  const {isLoading
} = useAppSelector(store => store.auth)


  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuth());


    return () => {
      console.log("unmounted");
    }
  },[])


  if (isLoading) {
     return <div className="h-dvh w-full flex gap-2 justify-center items-center bg-gray-700 "> <Loader className="animate-spin size-8"/> <span className="text-2xl">loading</span></div>
  }


  return (
    <Routes>
      {/* <Route path="register" element={<Register />} /> */}
      <Route
        path="login"
        element={
          <CheckAuth>
            <Login />
          </CheckAuth>
        }
      />

      <Route
        path="/"
        element={
          <CheckAuth>
            <Layout />
          </CheckAuth>
        }
      >
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="Tools" element={<Tools />} />
      </Route>
    </Routes>
  );
}

export default App;
