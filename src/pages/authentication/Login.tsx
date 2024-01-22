import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // const { register, handleSubmit } = useForm();
    const [login] = useLoginMutation();
    const onSubmit = async (data: FieldValues) => {
        console.log(data);
        const toastId = toast.loading("Logging in...")

        const userInfo = {
            id: data.id,
            password: data.password
        }
        try {
            const res = await login(userInfo).unwrap();
            console.log(res);
            const user = verifyToken(res.data.accessToken);
            dispatch(setUser({ user, token: res.data.accessToken }));
            navigate(`/${user.role}/dashboard`);
            toast.success(`User login successful as ${user.role}!`, { id: toastId });
        } catch {
            toast.error("Someting went wrong!", { id: toastId })
        }
    }
    return (
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
            <PHForm onSubmit={onSubmit}>
                <div>
                    <label htmlFor="id">ID</label>
                    <PHInput defaultValue="A-0001" type="text" name="id" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <PHInput defaultValue="admin123" type="text" name="password" />
                </div>
                <Button htmlType="submit">Login</Button>
            </PHForm>
        </Row>
    );
};

export default Login;