import AdminDashboard from "../pages/admin/AdminDashboard";
import Profile from "../pages/admin/AdminProfile";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademinSemester from "../pages/admin/academicManagement/AcademinSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import CreateOfferedCourse from "../pages/admin/academicManagement/CreateOfferedCourse";

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
        name: "Academic Management",
        children: [
            {
                name: "Create Semester",
                path: "create-semester",
                element: <CreateAcademicSemester />
            },
            {
                name: "Create Offered Course",
                path: "create-offered-course",
                element: <CreateOfferedCourse />
            },
            {
                name: "Academic Semesters",
                path: "academic-semesters",
                element: <AcademinSemester />
            },
            {
                name: "Create Faculty",
                path: "create-academic-faculty",
                element: <CreateAcademicFaculty />
            },
            {
                name: "Academic Faculty",
                path: "academic-faculty",
                element: <AcademicFaculty />
            },
            {
                name: "Create Department",
                path: "create-academic-department",
                element: <CreateAcademicDepartment />
            },
            {
                name: "Academic Department",
                path: "academic-department",
                element: <AcademicDepartment />
            },
        ]
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
];

