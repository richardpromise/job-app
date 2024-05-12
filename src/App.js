import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./layouts/Home";
import MainLayout from "./screen/MainLayout";
import Jobs from "./layouts/Jobs";
import Notfound from "./layouts/Notfound";
import { AddJobs } from "./layouts/AddJobs";
import UnAunthenticated from "./screen/UnAunthenticated";
import Register from "./components/register";
import Signin from "./components/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/add-job", element: <AddJobs /> },
      { path: "*", element: <Notfound /> },
    ],
  },
  {
    path: "/auth",
    element: <UnAunthenticated />,
    children: [
      {
        index: true,
        element: <Signin />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
