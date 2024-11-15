export default [
    {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: 'HomeOutlined',
        url: '/home/index'
    },
    {
        path: '/mall',
        name: 'mall',
        label: '商品管理',
        icon: 'ShopOutlined',
        url: '/mall/index'
    },
    {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'UserOutlined',
        url: '/user/index'
    },
    {
        path: '/other',
        label: '其他',
        icon: 'SettingOutlined',
        children: [
            {
                path: '/other/pageOne',
                name: 'page1',
                label: '页面1',
                icon: 'SettingOutlined'
            },
            {
                path: '/other/pageTwo',
                name: 'page2',
                label: '页面2',
                icon: 'SettingOutlined'
            }
        ]
    },
    {
        path: '/learn',
        name: 'learn',
        label: '学习资料',
        icon: 'BulbOutlined',
        // url: '/learn/index',
        children: [
            {
                path: '/learn/learnmd',
                name: 'learnmd',
                label: 'MD文件展示',
                icon: 'SettingOutlined'
            },
            {
                path: '/learn/learnflex',
                name: 'learnflex',
                label: 'Flex布局',
                icon: 'SettingOutlined'
            },
            {
                path: '/learn/learngrid',
                name: 'learngrid',
                label: 'Grid布局',
                icon: 'SettingOutlined'
            }
        ]
    },
    {
        path: '/plugin',
        label: '插件组件',
        icon: 'TagOutlined',
        children: [
            {
                path: '/plugin/plugin1',
                name: 'plugin1',
                label: '插件1',
                icon: 'SettingOutlined'
            },
            {
                path: '/plugin/plugin2',
                name: 'plugin2',
                label: '插件2',
                icon: 'SettingOutlined'
            }
        ]
    },
    {
        path: '/threejs',
        label: 'threejs组件',
        icon: 'SmileOutlined',
        children: [
            {
                path: '/threejs/threejs1',
                name: 'threejs1',
                label: 'threejs实例1',
                icon: 'SettingOutlined'
            },
            // {
            //     path: '/other/pageTwo',
            //     name: 'page2',
            //     label: '页面2',
            //     icon: 'SettingOutlined'
            // }
        ]
    },
]