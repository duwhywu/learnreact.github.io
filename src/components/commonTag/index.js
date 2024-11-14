import React from 'react';
import { Tag, Space } from 'antd';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { closeTab, setCurrentMenu } from '../../store/reducers/tab'
import { useLocation, useNavigate } from 'react-router-dom';

const CommonTag = () => {
    const tabsList = useSelector(state => state.tab.tabList)
    const currentMenu = useSelector(state => state.tab.currentMenu)
    // console.log(currentMenu, 'currentMenu');
    const dispatch = useDispatch()
    const action = useLocation()
    const navigate = useNavigate()
    // console.log(action, 'action');

    const handleClose = (tag, index) => {
        // console.log(index,'handleClose')
        let length = tabsList.length - 1
        console.log(index, length, action.path, 'handleClose')

        dispatch(closeTab(tag))
        // 关闭的不是当前tag
        if (tag.path !== action.pathname) {
            return
        }
        // 关闭的是当前tag
        if (index === length) {
            console.log(index, length, 'handleClose22')
            const curData = tabsList[index - 1]
            dispatch(setCurrentMenu(curData))
            navigate(curData.path)
        } else {
            // 如果tag存在一个数据，则选择后一个tag
            if (tabsList.length > 1) {
                // 下一个tag
                const nextData = tabsList[index + 1]
                dispatch(setCurrentMenu(nextData))
                navigate(nextData.path)
                console.log(currentMenu.path, 'ssssssadas');

            }
        }
    }
    // 点击tag
    const handleChange = (tag) => {
        console.log(tag, 'handleChange');
        dispatch(setCurrentMenu(tag))
        navigate(tag.path)
    }
    // 处理tag显示逻辑
    const setTag = (flag, item, index) => {
        return (
            flag ? <Tag key={item.name} color='#55acee' closeIcon onClose={() => handleClose(item, index)}>{item.label}</Tag> : <Tag key={item.name} onClick={() => handleChange(item)}>{item.label}</Tag>
        )
    }
    return (
        <Space className='common-tag' size={[0, 8]} wrap>
            {currentMenu && tabsList.map((item, index) => (setTag(item.path === currentMenu.path, item, index)))}
            {/* <Tag>首页</Tag>
            <Tag color='#55acee' closeIcon onClose={() => handleClose()}>
                用户列表
            </Tag> */}
        </Space>
    )
}

export default CommonTag;


