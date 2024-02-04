import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
    type: string;
    name: string
}

const PHInput = ({ type, name }: TInputProps) => {
    return (
        <div style={{ marginBottom: "10px" }}>
            <Controller name={name} render={({ field }) => <Input {...field} type={type} id={name} />} />
        </div>
    );
};

export default PHInput;