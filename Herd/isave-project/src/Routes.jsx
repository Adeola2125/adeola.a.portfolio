import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import BLOGPOST from "pages/BLOGPOST";
import BLOGPOSTOne from "pages/BLOGPOSTOne";
import FAQSOne from "pages/FAQSOne";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "homepage",
      element: <Homepage />,
    },
    {
      path: "blogpost",
      element: <BLOGPOST />,
    },
    {
      path: "blogpostone",
      element: <BLOGPOSTOne />,
    },
    {
      path: "faqsone",
      element: <FAQSOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
