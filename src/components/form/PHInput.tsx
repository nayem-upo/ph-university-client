import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    defaultValue: string;
    type: string;
    name: string
}

const PHInput = ({ defaultValue, type, name }: TInputProps) => {
    return (
        <div style={{ marginBottom: "10px" }}>
            <Controller name={name} render={({ field }) => <Input {...field} defaultValue={defaultValue} type={type} id={name} />} />
        </div>
    );
};

export default PHInput;