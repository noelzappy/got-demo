import { Layout } from "app/components";
import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  NotFound,
  Houses,
  Characters,
  Books,
  Book,
  Character,
} from "app/views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/houses",
        element: <Houses />,
      },
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <Book />,
      },
      {
        path: "/characters/:id",
        element: <Character />,
      },
    ],
  },
]);

export default router;
