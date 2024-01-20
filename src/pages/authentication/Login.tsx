import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm();
    const [login] = useLoginMutation();
    const onSubmit = async (data: FieldValues) => {
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id">ID</label>
                <input defaultValue="A-0001" type="text" id="id" {...register('id')} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input defaultValue="admin123" type="text" id="password" {...register('password')} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;