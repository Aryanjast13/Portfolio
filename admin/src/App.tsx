import { Route, Routes } from "react-router";
import Home from "./pages/Home.tsx/Home";
import Projects from "./pages/Projects/Projects";
import { Tools } from "./pages/Tools/Tools";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />

      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="Tools" element={<Tools />} />
      </Route>
    </Routes>
  );
}

export default App;
