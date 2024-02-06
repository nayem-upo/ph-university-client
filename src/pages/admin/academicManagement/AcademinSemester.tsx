import { Table, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import { DataType } from "./academicInterface";

const AcademinSemester = () => {
    const { data, isLoading } = useGetAllSemesterQuery([]);
    const semesterDataWithKeys = data?.data?.result.map((semester: DataType) => ({
        ...semester,
        key: semester._id,
    }));

    const semesterNamesSet = new Set<string>();

    const semesterFilter = data?.data?.result.filter((semester: DataType) => {
        if (!semesterNamesSet.has(semester.name)) {
            semesterNamesSet.add(semester.name);
            return true;
        }
        return false;
    }).map((semester: DataType) => ({
        text: semester.name,
        value: semester.name,
    }));


    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            filters: semesterFilter,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onFilter: (value: any, record: DataType) => record.name.indexOf(value) === 0,

        },
        {
            title: 'Code',
            dataIndex: 'code',
        },
        {
            title: 'Year',
            dataIndex: 'year',
        },
        {
            title: 'Start Month',
            dataIndex: 'startMonth',
        },
        {
            title: 'End Month',
            dataIndex: 'endMonth',
        },
    ];


    return (
        <div>
            <Table
                loading={isLoading}
                columns={columns}
                dataSource={semesterDataWithKeys}
                bordered
                title={() => <h1 className="text-xl font-semibold">Academic Semesters</h1>}
            />
        </div>
    );
};

export default AcademinSemester;