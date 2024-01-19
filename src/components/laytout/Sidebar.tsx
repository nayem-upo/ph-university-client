import { sideBarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';

const userRole = {
    ADMIN: 'admin',
    FACULTY: 'faculty',
    STUDENT: 'student',
}


const Sidebar = () => {

    const role = 'admin'
    let sidebarItems;
    switch (role) {
        case userRole.ADMIN:
            sidebarItems = sideBarItemsGenerator(adminPaths, userRole.ADMIN)
            break;
        case userRole.FACULTY:
            sidebarItems = sideBarItemsGenerator(facultyPaths, userRole.FACULTY)
            break;
        case userRole.STUDENT:
            sidebarItems = sideBarItemsGenerator(studentPaths, userRole.STUDENT)
            break;

        default:
            break;
    }

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div style={{ color: "white", textAlign: 'center' }}>
                <h1 style={{ paddingTop: "16px", paddingBottom: "16px" }}>PH University</h1>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={sidebarItems} />
        </Sider>
    );
};

export default Sidebar;