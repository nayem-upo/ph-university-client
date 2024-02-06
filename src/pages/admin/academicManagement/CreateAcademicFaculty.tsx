import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useCreateAcademicFacultyMutation } from "../../../redux/features/admin/academicManagementApi";

const CreateAcademicFaculty = () => {
    const [form] = useForm();
    const [createAcademicFaculty] = useCreateAcademicFacultyMutation();

    const handleCreateFaculty = async (values: SubmitHandler<FieldValues>) => {
        const toastId = toast.loading("Creating faculty...");
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const result: any = await createAcademicFaculty(values);
            if (result?.data?.success) {
                toast.success(`${result?.data?.message}`, { id: toastId })
            } else {
                toast.error(`${result?.error?.data?.errorSources[0]?.message}!`, { id: toastId })
            }
        } catch (err) {
            toast.error("Something went wrong!")
        }
    };
    return (
        <div>
            <h1 className="text-xl mb-8 font-semibold">Create Academic Faculty</h1>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 15 }}
                layout="vertical"
                onFinish={handleCreateFaculty}
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input academic faculty name!' }]}
                >
                    <Input />
                </Form.Item>
                <Button type="default" htmlType="submit">
                    Create Faculty
                </Button>
            </Form>
        </div>
    );
};

export default CreateAcademicFaculty;