import { createBrowserRouter, Navigate } from "react-router-dom"
import Main from "../pages/main"
import Home from "../pages/home"
import Mall from "../pages/mall"
import User from "../pages/user"
import PageOne from "../pages/other/pageOne"
import PageTwo from "../pages/other/pageTwo"
import Login from "../pages/login"
import Learnmd from "../pages/learn/md"
import LearnFlex from "../pages/learn/flex"
import LearnGrid from "../pages/learn/grid"
import Plugin1 from "../pages/plugin/plugin1"
import Plugin2 from "../pages/plugin/plugin2"

import Threejs1 from "../pages/threejs/threejs1"
const routes = [
    {
        path: '/',
        Component: Main,
        children: [
            // 重定向路由  用的是Navigate
            {
                path: '/',
                element: <Navigate to='/home' replace />
            },
            {
                path: 'home',
                Component: Home,

            },
            {
                path: 'mall',
                Component: Mall
            },
            {
                path: 'user',
                Component: User
            },
            {
                path: 'other',
                children: [
                    {
                        path: 'pageOne',
                        Component: PageOne
                    },
                    {
                        path: 'pageTwo',
                        Component: PageTwo
                    }
                ]
            },
            {
                path: 'learn',
                // Component: Learn,
                children: [
                    {
                        path: 'learnmd',
                        Component: Learnmd
                    },
                    {
                        path: 'learnflex',
                        Component: LearnFlex
                    },
                    {
                        path: 'learngrid',
                        Component: LearnGrid
                    }
                ]
            },
            {
                path: '/plugin',
                children: [
                    {
                        path: 'plugin1',
                        Component: Plugin1
                    },
                    {
                        path: 'plugin2',
                        Component: Plugin2
                    }
                ]
            },
            {
                path: '/threejs',
                children: [
                    {
                        path: 'threejs1',
                        Component: Threejs1
                    },
                    // {
                    //     path: 'pageTwo',
                    //     Component: PageTwo
                    // }
                ]
            },
        ]
    },
    {
        path: '/login',
        Component: Login,
    },

]


export default createBrowserRouter(routes)

