import React, { useEffect, useState } from "react";
import { Col, Row, Card, Table } from 'antd';
import './home.css'
import { getData } from '../../api'
import { columns, countData } from './data'
import * as Icon from "@ant-design/icons"
import MyEcharts from "../../components/Echarts"

const iconToElement = (name) => React.createElement(Icon[name])

const Home = () => {
    const userImg = require("../../assets/images/user.png")
    const [tableData, settableData] = useState([])
    // 创建echarts的响应式数据
    const [echartData, setEchartData] = useState({})
    // dom首次渲染完成
    useEffect(() => {
        getData().then(({ data }) => {
            // console.log(data, '请求成功')
            const { orderData, tableData, videoData, userData } = data.data
            // console.log(data.data, 'data.data')
            settableData(tableData)
            // echarts数据组装
            const order = orderData
            // x轴数据
            const xData = order.date
            // serice数据组装
            const keyArray = Object.keys(order.data[0]) // 传入一个对象并获取key
            const series = []
            keyArray.forEach(key => {
                series.push({
                    name: key,
                    data: order.data.map(item => item[key]),
                    type: 'line'
                })
            })
            setEchartData({
                order: {
                    xData,
                    series
                },
                user: {
                    xData: userData.map((item) => item.date),
                    series: [
                        {
                            name: '新增用户',
                            data: userData.map(item => item.new),
                            type: 'bar'
                        },
                        {
                            name: '活跃用户',
                            data: userData.map(item => item.active),
                            type: 'bar'
                        }
                    ]
                },
                video: {
                    series: [
                        {
                            data: videoData,
                            type: 'pie'
                        }
                    ]
                }
            })
        })


    }, [])

    return (
        <Row className="home">
            <Col span={8}>
                <Card hoverable>
                    <div className="user">
                        <img src={userImg}></img>
                        <div className="userinfo">
                            <p className="name">admin</p>
                            <p className="access">超级管理员</p>
                        </div>
                    </div>
                    <div className="logininfo">
                        <p>上次登录时间：<span>2024-7-16</span></p>
                        <p>上次登录地点：<span>上海</span></p>
                    </div>
                    <Card>
                        <Table pagination={false} columns={columns} dataSource={tableData} rowKey={"name"}></Table>
                    </Card>
                </Card>
            </Col>
            <Col span={15} className="right">
                <div className="num">
                    {
                        countData.map((item, index) => {
                            return (
                                <Card key={index}>
                                    <div className="icon-box" style={{ background: item.color }}>{iconToElement(item.icon)}</div>
                                    <div className="detail">
                                        <p className="num">${item.value}</p>
                                        <p className="txt">{item.name}</p>

                                    </div>
                                </Card>
                            )
                        })
                    }
                </div>
                {echartData.order && <MyEcharts chartData={echartData.order} style={{ height: '280px' }}></MyEcharts>}
                <div className="graph">
                    {echartData.user && <MyEcharts chartData={echartData.user} style={{ height: '240px', width: '50%' }}></MyEcharts>}
                    {echartData.user && <MyEcharts chartData={echartData.video} isAxisChart={false} style={{ height: '240px', width: '50%' }}></MyEcharts>}
                </div>
            </Col>
        </Row >

    );
}

export default Home;