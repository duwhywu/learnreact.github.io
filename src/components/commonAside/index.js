import React from 'react'
import MenuConfig from '../../config'
import * as Icon from "@ant-design/icons"
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectMenuList } from '../../store/reducers/tab';

const { Header, Sider, Content } = Layout;

// 动态获取icon方法
const iconToElement = (name) => React.createElement(Icon[name])

// 处理MenuConfig菜单数据
const items = MenuConfig.map(icon => {
    // 没有子菜单
    const child = {
        key: `${icon.path}`,
        icon: iconToElement(icon.icon),
        label: `${icon.label}`
    }
    // 有子菜单
    if (icon.children) {
        child.children = icon.children.map(childItem => {
            return {
                key: childItem.path,
                icon: iconToElement(childItem.icon),
                label: childItem.label
            }
        })
    }
    return child
})



const CommonAside = ({ collapsed }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // 添加数据到store方法
    const setTabsList = (val) => {
        // console.log(val,'valvalvalvalvalvalvalvalval');

        dispatch(selectMenuList(val))
    }
    // 路由跳转
    const selectMenu = (e) => {
        // console.log(e, 'eeeeeeeeeeeeeeeeee');
        let data
        MenuConfig.forEach(item => {
            // 找到当前的数据
            if (item.path === e.keyPath[e.keyPath.length - 1]) {
                data = item
                // 如果是有二级菜单
                if (e.keyPath.length > 1) {
                    data = item.children.find(child => {
                        return child.path === e.key
                    })
                }
            }
        })
        setTabsList({
            path: data.path,
            name: data.name,
            label: data.label
        })
        navigate(e.key)
    }
    return (
        <Sider collapsed={collapsed}  >
            <h3 className='app-name'>
                {collapsed ? '后台' : '通用后台管理系统'}
                {/* {collapsed} */}
            </h3>
            <Menu
                theme="dark"
                mode="inline"
                items={items}
                style={{
                    height: "100%"
                }}
                onClick={selectMenu}
            />
        </Sider>
    )
}

export default CommonAside