import React from "react";
import { Button, Form, Input, message } from "antd";
import "./login.css";
import { getMenu } from "../../api";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    // 在登录状态下需要跳转home页面
    if (localStorage.getItem('token')) {
        return <Navigate to="/home" replace />
    }
    const handleSubmit = (val) => {
        if (!val.password || !val.username) {
            return message.open({
                type: 'warning',
                content: '请输入用户名和密码',
            })
        }
        getMenu(val).then(({ data }) => {
            // console.log(data, 'getMenu');
            localStorage.setItem('token', data.data.token)
            navigate('/home')
        })
    }
    return (
        <Form className="login-container" onFinish={handleSubmit}>
            <div className="login_title">欢迎登录</div>
            <Form.Item name="username" label="账号">
                <Input placeholder="请输入账号" />
            </Form.Item>
            <Form.Item name="password" label="密码">
                <Input type="password" placeholder="请输入密码" />
            </Form.Item>
            <Form.Item className="login-button">
                <Button type="primary" htmlType="submit">登录</Button>
            </Form.Item>

        </Form>
    );
};

export default Login;
