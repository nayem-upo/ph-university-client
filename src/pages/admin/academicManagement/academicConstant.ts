import { TableProps } from "antd";
import { DataType } from "./academicInterface";

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const facultyColumns: TableProps<DataType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',

    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
    },
    {
        title: 'Updated At',
        dataIndex: 'updatedAt',
    },
];
export const departmentColumns: TableProps<DataType>['columns'] = [
    {
        title: 'Department Name',
        dataIndex: 'name',

    },
    {
        title: 'Faculty',
        dataIndex: 'academicFaculty',
        render: (faculty: { name: string } | undefined) => faculty?.name || 'N/A',
    },
    {
        title: 'Updated At',
        dataIndex: 'updatedAt',
    },
];