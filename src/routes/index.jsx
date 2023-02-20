import { createBrowserRouter } from "react-router-dom";
import ListMovie from "../components/movie/ListMovie";
import Test from "../components/movie/Test";
import DetailMovie from "../components/movie/DetailMovie";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <ListMovie />,
        index: true,
      },
      {
        path: "a",
        element: <Test />,
      },
    ],
  },
  {
    path: "detail",
    element: <DetailMovie />,
  },
]);
