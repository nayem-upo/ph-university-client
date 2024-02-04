import React from 'react';
import { Button, Form, Select } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { months } from './academicConstant';
import { FieldValues, SubmitHandler } from 'react-hook-form';

const CreateAcademicSemester: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 7 }, (_, i) => currentYear + i);
    const [form] = useForm();

    const handleNameChange = (selectedName: string) => {
        let codeValue;
        switch (selectedName) {
            case 'Autumn':
                codeValue = '01';
                break;
            case 'Summer':
                codeValue = '02';
                break;
            case 'Fall':
                codeValue = '03';
                break;
            default:
                codeValue = '';
                break;
        }

        form.setFieldsValue({
            code: codeValue,
        });
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validateEndMonth = (_: any, value: string) => {
        const startMonthValue = form.getFieldValue('start month') as string;
        if (value && startMonthValue && months.indexOf(value) < months.indexOf(startMonthValue)) {
            return Promise.reject(new Error('End month cannot be less than start month!'));
        }
        return Promise.resolve();
    };
    const handleCreateSemester = async (values: SubmitHandler<FieldValues>) => {
        console.log(values);
    };

    return (
        <div>
            <h1 style={{ marginBottom: '30px' }}>Create Academic Semester</h1>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 15 }}
                layout="vertical"
                onFinish={handleCreateSemester}
            >
                <div className="grid md:gap-0 gap-2 grid-cols-2 justify-center items-center">
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input name!' }]}
                    >
                        <Select style={{ width: '100%' }} onChange={handleNameChange}>
                            <Select.Option key="Autumn">Autumn</Select.Option>
                            <Select.Option key="Summer">Summer</Select.Option>
                            <Select.Option key="Fall">Fall</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Year"
                        name="year"
                        rules={[
                            { required: true, message: 'Please input year!' },
                            {
                                validator: (_, value) => {
                                    if (value < currentYear) {
                                        return Promise.reject(new Error('Year cannot be less than the current year!'));
                                    }
                                    return Promise.resolve();
                                },
                            },
                        ]}
                    >
                        <Select style={{ width: '100%' }}>
                            {yearOptions.map((yearOption) => (
                                <Select.Option key={yearOption} value={yearOption}>
                                    {yearOption}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Code"
                        name="code"
                        rules={[{ required: true, message: 'Please input code!' }]}
                    >
                        <Select style={{ width: '100%' }} disabled>
                            <Select.Option key="Autumn">01</Select.Option>
                            <Select.Option key="Summer">02</Select.Option>
                            <Select.Option key="Fall">03</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Start Month"
                        name="start month"
                        rules={[{ required: true, message: 'Please input start month!' }]}
                    >
                        <Select style={{ width: '100%' }}>
                            {months.map((month) => (
                                <Select.Option key={month} value={month}>
                                    {month}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="End Month"
                        name="end month"
                        rules={[
                            { required: true, message: 'Please input end month!' },
                            { validator: validateEndMonth },
                        ]}
                    >
                        <Select style={{ width: '100%' }}>
                            {months.map((month) => (
                                <Select.Option key={month} value={month}>
                                    {month}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                </div>
                <Button type="default" htmlType="submit">
                    Create Semester
                </Button>
            </Form>
        </div>
    );
};

export default CreateAcademicSemester;
