import { Table } from "antd";
import { facultyColumns } from "./academicConstant";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagementApi";
import { DataType } from "./academicInterface";

const AcademicFaculty = () => {
    const { data, isLoading } = useGetAllAcademicFacultiesQuery([]);
    const faculties = data?.data?.result;
    const facultiesDataWithKeys = faculties?.map((faculty: DataType) => ({
        ...faculty,
        key: faculty._id,
    }));

    return (
        <div>
            <Table
                loading={isLoading}
                columns={facultyColumns}
                dataSource={facultiesDataWithKeys}
                bordered
                title={() => <h1 className="text-xl font-semibold">Academic Faculties</h1>}
            />
        </div>
    );
};

export default AcademicFaculty;