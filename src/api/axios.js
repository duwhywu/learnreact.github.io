import axios from 'axios'


const baseUrl = '/api'
// axios的二次封装
class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }

    interception(instance) { // instance是axios的实例对象
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });
        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }

    request(options) {
        // 创建axios实例
        const instance = axios.create()

        options = { ...this.getInsideConfig(), ...options }
        // 拦截器的绑定
        this.interception(instance)

        return instance(options)
    }
}

export default new HttpRequest(baseUrl)