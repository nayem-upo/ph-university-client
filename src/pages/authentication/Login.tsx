import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/features/auth/authSlice";

const Login = () => {

    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm();
    const [login] = useLoginMutation();
    const onSubmit = async (data) => {
        const userInfo = {
            id: data.id,
            password: data.password
        }
        const res = await login(userInfo).unwrap();
        console.log(res);
        dispatch(setUser({ user: {}, token: res.data.accessToken }))
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