import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./thepages/Home";
import Blue from "./thepages/Blue";
import Red from "./thepages/Red";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Blue", element: <Blue /> },
      { path: "/Red", element: <Red /> },
    ],
  },
]);

export default router;
