import {
    DesktopOutlined,
    PlusSquareOutlined,
    SnippetsOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useEffect, useState } from 'react';
import { localService } from '../services/localService';
import { NavLink, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const itemsMenu = [
    getItem('ADMIN MOVIE', '1', <SnippetsOutlined />, [
        getItem(<NavLink to={'/admin'}>ADMIN MOVIE</NavLink>, '3', <PlusSquareOutlined />),
        getItem(<NavLink to={'/admin/add-movie'}>ADD NEW MOVIE</NavLink>, '4', <PlusSquareOutlined />),
      ]),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />),
  ];


const AdminLayout = ({ Component }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    const navigate = useNavigate()

    useEffect(() => {
        const user = localService.get()
        if (!user || user.maLoaiNguoiDung !== "QuanTri") {
            navigate('/login')
        }

    }, [])


    // ----------------------------------------------------------------
    return (
        <Layout style={{ minHeight: '100vh' }} >
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={itemsMenu}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Component />
                </Content>
            </Layout>
        </Layout>
    );
};
export default AdminLayout;