import { Table } from "antd";
import { useGetAllAcademicDepartmentsQuery } from "../../../redux/features/admin/academicManagementApi";
import { departmentColumns } from "./academicConstant";
import { DataType } from "./academicInterface";

const AcademicDepartment = () => {
    const { data, isLoading } = useGetAllAcademicDepartmentsQuery([]);
    const departments = data?.data?.result;
    const departmentsDataWithKeys = departments?.map((department: DataType) => ({
        ...department,
        key: department._id,
    }));
    return (
        <div>
            <Table
                loading={isLoading}
                columns={departmentColumns}
                dataSource={departmentsDataWithKeys}
                bordered
                title={() => <h1 className="text-xl font-semibold">Academic Departments</h1>}
            />
        </div>
    );
};

export default AcademicDepartment;