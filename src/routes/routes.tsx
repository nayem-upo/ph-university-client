import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import { studentPaths } from "./student.routes";
import { facultyPaths } from "./faculty.routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin",
        element: <App />,
        children: routesGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element: <App />,
        children: routesGenerator(facultyPaths)
    },
    {
        path: "/student",
        element: <App />,
        children: routesGenerator(studentPaths)
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },

])

export default router;