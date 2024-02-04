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
    })
})

export const { useGetAllSemesterQuery, useCreateAcademicSemesterMutation } = academicManagementApi;