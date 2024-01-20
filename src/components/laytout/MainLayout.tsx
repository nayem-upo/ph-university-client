import { Button, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useAppDispatch } from '../../redux/hooks';
import { logOut } from '../../redux/features/auth/authSlice';
import { toast } from 'sonner';


const { Header, Content, Footer } = Layout;
const MainLayout = () => {
    const dispatch = useAppDispatch();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleLogOut = () => {
        dispatch(logOut())
        const toastId = toast.success("Successfully logged out!");
        toast.dismiss(toastId);
    }

    return (
        <Layout style={{ height: "100vh" }}>
            <Sidebar />
            <Layout>
                <Header style={{
                    padding: 0, background: colorBgContainer,
                    display: 'flex', justifyContent: "center",
                    alignItems: "center"
                }} >
                    <Button onClick={handleLogOut}>Log Out</Button>
                </Header >
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;