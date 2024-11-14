import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import userApi from './mockServeData/user'
import permissionApi from './mockServeData/permission'

// console.log('mock', userApi.updateUser)

// 创建第一个拦截接口数据
Mock.mock(/home\/getData/, 'get', homeApi.getStatisticalData())

Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/addUser/, 'post', userApi.createUser)
Mock.mock(/user\/editUser/, 'post', userApi.updateUser)
Mock.mock(/user\/delUser/, 'post', userApi.deleteUser)

Mock.mock(/permission\/getMenu/, 'post', permissionApi.getMenu)
