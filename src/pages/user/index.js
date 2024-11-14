import React, { useEffect, useState } from "react";
import { Button, Form, Input, Table, Popconfirm, Modal, InputNumber, Select, DatePicker } from "antd";
import "./user.css";
import { getUser, addUser, editUser, delUser } from "../../api";
import dayjs from "dayjs";


const User = () => {
    const [listData, setListData] = useState({
        name: ""
    })
    const [tableData, setTableData] = useState([])
    // 0（新增）1（编辑）
    const [modalType, setModalType] = useState(0)
    // 传创建一个
    const [isModalOpen, setIsModelOpen] = useState(false)
    const [form] = Form.useForm()

    const handleClick = (type, rowData) => { // 新增/编辑按钮
        setIsModelOpen(!isModalOpen)
        if (type == "add") {
            setModalType(0)
        } else {
            setModalType(1)
            const cloneData = JSON.parse(JSON.stringify(rowData))
            cloneData.birth = dayjs(rowData.birth)
            // 表单数据的回填
            form.setFieldsValue(cloneData)
        }

    }
    const handleFinish = (e) => {// 提交 
        console.log(e, 'handleFinish');

        setListData({
            name: e.keyword
        })

        // console.log(e);
    }
    useEffect(() => {
        getTableData()
    }, [listData])
    const handleDelete = ({ id }) => { // 删除
        delUser({ id }).then(() => {
            getTableData()
        })
    }
    const getTableData = () => { // 请求列表数据
        getUser(listData).then(({ data }) => {
            setTableData(data.list)
        })
    }
    // 弹窗确定
    const handleOk = () => {
        // 提交表单校验
        form.validateFields().then((val) => {
            console.log(val, 'valvalval1');
            // 处理日期参数
            val.birth = dayjs(val.birth).format('YYYY-MM-DD')
            // console.log(val, 'valvalval2');
            // 调用接口
            if (modalType) {//编辑
                editUser(val).then(() => {
                    handleCancel()
                    getTableData()

                })
            } else {
                addUser(val).then(() => {

                    getTableData()// 更新数据
                    handleCancel()// 关闭弹窗

                })
            }

        }).catch((err) => {
            console.log(err, 'errerr')
        })
    }
    // 弹窗取消
    const handleCancel = () => {
        setIsModelOpen(!isModalOpen)
        form.resetFields()
    }

    const columns = [
        {
            title: '用户名',
            dataIndex: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            render: (val) => {
                return val ? '女' : '男'
            }
        },
        {
            title: '出身日期',
            dataIndex: 'birth'
        },
        {
            title: '住址',
            dataIndex: 'addr'
        },
        {
            title: '操作',
            render: (rowData) => {
                return (
                    <div className="flex-box">
                        <Button style={{ marginRight: '5px' }} onClick={() => handleClick('edit', rowData)}>编辑</Button>
                        <Popconfirm
                            title="提示"
                            description="此操作将删除该用户, 是否继续?"
                            okText="确认"
                            cancelText="取消"
                            onConfirm={() => handleDelete(rowData)}>
                            <Button type="primary" danger>删除</Button>
                        </Popconfirm>
                    </div>
                )
            }
        }
    ]
    useEffect(() => { // 页面加载
        // 调用后端接口获取数据
        getTableData()

    }, [])
    return (
        <div className="user">
            <div className="flex-box space-between">
                <Button type="primary" onClick={() => handleClick('add')}> + 新增 </Button>
                <Form layout="inline" onFinish={handleFinish} >
                    <Form.Item name="keyword">
                        <Input placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item >
                        <Button htmlType="submit" type="primary">搜索</Button>
                    </Form.Item>
                </Form>
            </div>
            <Table style={{ marginTop: '10px' }} columns={columns} dataSource={tableData} rowKey={'id'}></Table>
            <Modal
                title={modalType ? "编辑" : "新增"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="确定"
                cancelText="取消"

            >
                <Form
                    form={form}
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    labelAlign="left"
                >
                    {
                        modalType == 1 &&
                        <Form.Item
                            name='id'
                            hidden
                        >
                            <Input></Input>
                        </Form.Item>
                    }
                    <Form.Item
                        label="姓名"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '请输入姓名',
                            },
                        ]}
                    >
                        <Input placeholder="请输入姓名"></Input>
                    </Form.Item>
                    <Form.Item
                        label="年龄"
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: '请输入年龄',
                            },
                            {
                                type: 'number',
                                message: '年龄必须是数字',
                            }
                        ]}
                    >
                        <InputNumber placeholder="请输入年龄"></InputNumber>
                    </Form.Item>
                    <Form.Item
                        label="性别"
                        name="sex"
                        rules={[
                            {
                                required: true,
                                message: '请输入性别',
                            },
                        ]}
                    >
                        <Select placeholder="请选择性别"
                            options={[
                                { value: 0, label: '男' },
                                { value: 1, label: '女' }
                            ]}
                        >
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="出身日期"
                        name="birth"
                        rules={[
                            {
                                required: true,
                                message: '请输入出身日期',
                            },
                        ]}
                    >
                        <DatePicker placeholder='请选择' format='YYYY/MM/DD' />
                    </Form.Item>
                    <Form.Item
                        label="地址"
                        name="addr"
                        rules={[
                            {
                                required: true,
                                message: '请输入地址',
                            },
                        ]}
                    >
                        <Input placeholder="请输入地址"></Input>
                    </Form.Item>
                </Form>
            </Modal>
        </div >
    );
}

export default User;