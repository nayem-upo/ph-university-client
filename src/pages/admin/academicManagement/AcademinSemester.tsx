import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademinSemester = () => {
    const { data } = useGetAllSemesterQuery([]);
    console.log(data);
    return (
        <div>
            <h1>This is academic semister {data?.data?.length}</h1>
        </div>
    );
};

export default AcademinSemester;