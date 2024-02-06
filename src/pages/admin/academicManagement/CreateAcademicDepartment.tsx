import { useForm } from "antd/es/form/Form";
import { useCreateAcademicDepartmentMutation, useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Form, Input, Select } from "antd";
import { IFaculty } from "./academicInterface";

const CreateAcademicDepartment = () => {

    const [form] = useForm();
    const [createAcademicDepartment] = useCreateAcademicDepartmentMutation();
    const { data } = useGetAllAcademicFacultiesQuery([]);
    const faculties = data?.data?.result;

    const handleCreateDepartment = async (values: SubmitHandler<FieldValues>) => {
        const toastId = toast.loading("Creating faculty...");
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const result: any = await createAcademicDepartment(values);
            if (result?.data?.success) {
                toast.success(`${result?.data?.message}!`, { id: toastId })
            } else {
                toast.error(`${result?.error?.data?.errorSources[0]?.message}!`, { id: toastId })
            }
        } catch (err) {
            toast.error("Something went wrong!")
        }
    };

    return (
        <div>
            <h1 className="text-xl mb-8 font-semibold">Create Academic Depertment</h1>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 15 }}
                layout="vertical"
                onFinish={handleCreateDepartment}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input academic department name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Academic Faculty"
                    name="academicFaculty"
                    rules={[{ required: true, message: 'Please input Academic Faculty!' }]}
                >
                    <Select style={{ width: '100%' }}>
                        {
                            faculties?.map((faculty: IFaculty) => <Select.Option key={faculty._id} value={faculty._id}>{faculty.name}</Select.Option>)
                        }
                    </Select>
                </Form.Item>
                <Button type="default" htmlType="submit">
                    Create Department
                </Button>
            </Form>
        </div>
    );
};

export default CreateAcademicDepartment;