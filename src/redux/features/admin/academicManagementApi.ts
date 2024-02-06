import { baseApi } from "../../api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemester: builder.query({
            query: () => ({
                url: "/academic-semesters",
                method: "GET",
            })
        }),
        createAcademicSemester: builder.mutation({
            query: (semester) => ({
                url: "/academic-semesters/create-academic-semester",
                method: "POST",
                body: semester
            })
        }),
        createAcademicFaculty: builder.mutation({
            query: (faculty) => ({
                url: "/academic-faculties/create-academic-faculty",
                method: "POST",
                body: faculty
            })
        }),
        getAllAcademicFaculties: builder.query({
            query: () => ({
                url: "/academic-faculties",
                method: "GET",
            })
        }),
        createAcademicDepartment: builder.mutation({
            query: (department) => ({
                url: "/academic-departments/create-academic-department",
                method: "POST",
                body: department
            })
        }),
        getAllAcademicDepartments: builder.query({
            query: () => ({
                url: "/academic-departments",
                method: "GET",
            })
        }),
    })
})

export const {
    useGetAllSemesterQuery,
    useCreateAcademicSemesterMutation,
    useCreateAcademicFacultyMutation,
    useCreateAcademicDepartmentMutation,
    useGetAllAcademicDepartmentsQuery,
    useGetAllAcademicFacultiesQuery,
} = academicManagementApi;