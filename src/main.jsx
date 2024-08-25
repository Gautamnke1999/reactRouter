import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout.jsx/Layout.jsx";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import User from "./Component/User/User.jsx";
import Github, { githubInfoLoader } from "./Component/Github/Github.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"
    element={<Layout/>}>

    <Route path=""
    element={<Home/>}/>

    <Route path="about"
    element={<About/>}/>
      
      <Route path="contact"
    element={<Contact/>}/>

    <Route path="user/userid"
    element={<User/>}/>

    <Route loader={githubInfoLoader}
    path="github"
    element={<Github/>}/>

</Route>

  )
  


)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
