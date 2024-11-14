import { createSlice } from '@reduxjs/toolkit'

const tabSlice = createSlice({
    name: 'tab', // 写一个名称
    initialState: { // 写组件state数据
        isCollapse: false,
        tabList: [
            {
                path: '/', // 路径
                name: 'home',
                label: '首页', // 标题
            }
        ],
        currentMenu: {}
    },
    reducers: { // 用来修改状态的
        collapseMenu: state => {
            state.isCollapse = !state.isCollapse
        },
        selectMenuList: (state, { payload: val }) => {
            // console.log(val.name,'selectMenuList');
            if (val.name !== 'home') {
                state.currentMenu = val
                // 过滤重复tag
                const result = state.tabList.findIndex(item => item.name == val.name)
                if (result == -1) {
                    state.tabList.push(val)
                    // console.log(state.tabList, 'state.tabList111');

                }
            } else{
                // console.log(state.tabList, 'state.tabList222');
                state.currentMenu = null
            }
        },
        closeTab: (state, { payload: val }) => {
            let res = state.tabList.findIndex(item => item.name === val.name)
            state.tabList.splice(res, 1)
            // console.log(res, 'closeTab');

        },
        setCurrentMenu: (state, { payload: val }) => {
            // console.log(val, 'setCurrentMenu111');
            if (val.name === 'home') {
                state.currentMenu = {}
            } else {
                state.currentMenu = val
                console.log(state.currentMenu, 'setCurrentMenu222');
            }

        }
    }
})

export const { collapseMenu, selectMenuList, closeTab, setCurrentMenu } = tabSlice.actions
export default tabSlice.reducer