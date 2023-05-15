import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import Work from "../components/Work";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/work",
    element: <Work />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error />,
  },
]);
