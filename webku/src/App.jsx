import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import Pendidikan from "./pages/Pendidikan";
import AppLayout from "./layouts/AppLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Profile />,
            },
            {
                path: "/project",
                element: <Project />,
            },
            {
                path: "/pendidikan",
                element: <Pendidikan />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
