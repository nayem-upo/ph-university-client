import Profile from "../pages/admin/AdminProfile";
import OfferedCourse from "../pages/courses/offeredCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

export const studentPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashboard />
    },
    {
        name: "Offered Course",
        path: "offered-course",
        element: <OfferedCourse />
    },
    {
        name: "Profile",
        path: "profile",
        element: <Profile />
    },
]