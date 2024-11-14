import { Navigate } from 'react-router-dom'
// 这里定义了一个token相关的重定向
export const RouterAuth = ({ children }) => {
    const token = localStorage.getItem('token')
    if (!token) {
        return <Navigate to='/login' replace />
    }
    return (
        children
    )
}