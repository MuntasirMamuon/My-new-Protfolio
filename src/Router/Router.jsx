import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Services from "../Components/Services/Services";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/skills",
          element: <Skills></Skills>,
        },
        {
          path: "/services",
          element: <Services></Services>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
      ]
    },
    
  ]);


  export default router;