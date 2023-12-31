"use client";

import { authKey } from '@/constants/storageKey';
import { getUserInfo, removeUserInfo } from '@/services/auth.service';
import { MenuOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Breadcrumb, Button, Drawer, Dropdown, Layout, Menu, MenuProps, Space, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { StyledHeaderMenu, StyledMenuIcon, StyledTheIcon } from '../styles/CustomStyles';
import { basicFlexBetween, basicFlexCenter } from '../styles/Styles';
import ServicesCart from './Cart';
const { Header, Content, Footer } = Layout;

const CommonHeader = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const { role } = getUserInfo() as any;
    //   console.log(role);
    const router = useRouter();
    const logOut = () => {
        removeUserInfo(authKey);
        toast.error("Logged Out");
        router.push("/login");
    }

    const items: MenuProps['items'] = [
        {
            key: "0",
            label: <Button>{role}</Button>
        },
        {
            key: "1",
            label: <Link href="/profile"><Button type="text" danger> Profile </Button></Link>
        },
        {
            key: "2",
            label: <div>
                {role ?
                    <Button onClick={logOut} type="text" danger>LogOut</Button> :
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <Button type="primary" style={{ marginBottom: "5px" }}>
                            <Link href='/login'>Login</Link>
                        </Button>
                        <Button type="primary">
                            <Link href='/signup'>Sign Up</Link>
                        </Button>
                    </div>
                }
            </div>
        }
    ]

    return (
        <Header>
            <div style={basicFlexBetween}>

                <div style={{ width: "70vw", display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
                    <div className="demo-logo" style={{ color: "white", fontWeight: "bold", fontSize: "20px", lineHeight: '0' }}>
                        <span style={{ color: "white" }}><Link href='/'>IT-HOUSE</Link></span>

                    </div>

                    <StyledHeaderMenu>
                        <AppMenu isInline={false}></AppMenu>
                    </StyledHeaderMenu>
                </div>

                <div style={basicFlexCenter}>
                    <div>
                        <ShoppingCartOutlined onClick={() => setOpenCart(true)} style={{ color: 'white', fontSize: 18, marginTop: '20px' }} />
                    </div>
                    <div>
                        <Dropdown menu={{ items }}>
                            <a>
                                <Space wrap size={16}>
                                    <Avatar size="large" icon={<UserOutlined />} />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>



                    <div style={{ margin: "14px 0 0 10px" }}>
                        <StyledTheIcon>
                            <MenuOutlined style={{ color: "white", fontSize: 30 }}
                                onClick={() => {
                                    setOpenMenu(true);
                                }}
                            ></MenuOutlined>
                        </StyledTheIcon>
                    </div>
                </div>
            </div>

            <Drawer
                placement="right"
                open={openMenu}
                onClose={() => {
                    setOpenMenu(false);
                }}
                closable={true}
                style={{ backgroundColor: "#001529" }}
            >
                <AppMenu isInline={true}></AppMenu>
            </Drawer>
            <Drawer
                placement="right"
                open={openCart}
                onClose={() => {
                    setOpenCart(false);
                }}
                closable={true}
                style={{ backgroundColor: "#001529" }}
            >
                {/* <AppMenu isInline={true}></AppMenu> */}
                <ServicesCart></ServicesCart>
            </Drawer>
        </Header>
    )
}

export default CommonHeader;


function AppMenu({ isInline = false }) {
    return (
        <Menu
            style={{
                backgroundColor: "#001529",
                color: "white",
                fontSize: 16,
                border: "none",
                width: "500px"
            }}
            mode={isInline ? "inline" : "horizontal"}
            items={[
                {
                    label: <Link href={'/'}>Home</Link>,
                    key: "home",
                },
                {
                    label: <Link href={'/profile'}>Profile</Link>,
                    key: "profile",
                },
                {
                    label: <Link href={'/services'}>Services</Link>,
                    key: "services",
                },
                {
                    label: <Link href={'/blogs'}>Blogs</Link>,
                    key: "blogs",
                },
                {
                    label: <Link href={'/booking'}>Booking</Link>,
                    key: "booking",
                }
            ]}
        ></Menu>
    );
}