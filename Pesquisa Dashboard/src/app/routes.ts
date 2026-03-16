import { createBrowserRouter } from "react-router";
import Presentation from "./Presentation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Presentation,
  },
  {
    path: "*",
    Component: Presentation,
  },
]);
