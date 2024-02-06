import AdminDashboard from "../pages/admin/AdminDashboard";
import Profile from "../pages/admin/AdminProfile";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
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
            {
                name: "Create Offered Course",
                path: "create-offered-course",
                element: <CreateOfferedCourse />
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
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent />
            },
        ]
    },
];

