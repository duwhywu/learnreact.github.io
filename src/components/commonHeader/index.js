import React, { useState } from "react";
import { Button, Layout, Avatar, Dropdown, Space } from 'antd';
import { LeftCircleOutlined , RightCircleOutlined  } from '@ant-design/icons';
const { Header, Sider, Content } = Layout;
import './index.css'
import { useDispatch } from 'react-redux'
import { collapseMenu } from '../../store/reducers/tab'
import { useNavigate } from "react-router-dom";
const CommonHeader = ({ collapsed }) => {
    const navigate = useNavigate()
    const logout = () => {// 登出
        localStorage.removeItem('token')
        navigate('/login')
    }
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    个人中心
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" onClick={() => { logout() }} rel="noopener noreferrer">
                    登出
                </a>
            ),
            // icon: <SmileOutlined />,

        },
    ];
    const dispatch = useDispatch()

    const [open, setOpen] = useState()
    // 点击方法
    const setCollapsed = () => {
        setOpen(!open)
        dispatch(collapseMenu())
        // console.log(collapsed,'221');

    }
    //创建useDispatch
    return (
        <Header className="header-container">
            <Button
                type="text"
                icon={!open ? <LeftCircleOutlined /> : <RightCircleOutlined />}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 32,
                    backgroundColor: '#fff',
                }}
                onClick={setCollapsed}
            />
            <Dropdown menu={{ items }}>
                <Avatar size={36} src={<img src={require("../../assets/images/user.png")}></img>}></Avatar>

            </Dropdown>
        </Header>
    )
}

export default CommonHeader