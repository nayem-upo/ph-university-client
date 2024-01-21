import AdminDashboard from "../pages/admin/AdminDashboard";
import Profile from "../pages/admin/AdminProfile";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AcademinSemester from "../pages/admin/academicManagement/AcademinSemester";

export const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard />
    },
    {
        name: "Profile",
        path: "profile",
        element: <Profile />
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin />
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty />
            },
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent />
            },
        ]
    },
    {
        name: "Academic Management",
        children: [
            {
                name: "Create Semester",
                path: "create-semester",
                element: <CreateAdmin />
            },
            {
                name: "Create Offered Course",
                path: "create-offered-course",
                element: <CreateStudent />
            },
            {
                name: "Academic Semesters",
                path: "academic-semesters",
                element: <AcademinSemester />
            }
        ]
    },
];

