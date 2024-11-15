import React, { useEffect, useState } from 'react';
import { Select, InputNumber, Button } from 'antd';
import './style.css'

// 接受什么？
// 1盒子个数  2容器属性 3容器item属性 
const commonLearnComp = ({ boxObj, itemObj }) => {
    // console.log(boxObj, 'boxObj');
    // console.log(itemObj, 'itemObj');
    const [boxObjState, setBoxObjState] = useState(boxObj)  // 设置容器属性
    const [itemObjState, setItemObjState] = useState(itemObj)  // 设置容器item属性
    const [valueState, setValueState] = useState(3)  // 默认box个数
    const [optionsBox, setOptionsBox] = useState([]);  // 用状态来存储 optionsBox
    const [optionsBoxValue, setOptionsBoxValue] = useState([])
    const [tempArrNums, setTempArrNums] = useState(0)
    const [sHandleChangeSetBOX, setsHandleChangeSetBOX] = useState([])
    const [optionStyle, setOptionStyle] = useState('')  // 多少px
    const [FlexBoxValueNum, setFlexBoxValueNum] = useState(100) // 盒子大小
    const [BoxStyle, setBoxStyle] = useState({ display: 'grid' })
    const [ItemStyle, setItemStyle] = useState({
        width: '100px',
        height: '100px',
    })
    const [boxStyleName, setBoxStyleName] = useState('')


    useEffect(() => {
        const updatedOptions = Object.keys(boxObjState).map((item) => ({
            value: item,
            label: item
        }));
        setOptionsBox(updatedOptions);  // 更新 optionsBox
    }, [boxObjState])

    const handleChange = (value) => {
        const tempArr = []
        for (let i = 0; i < boxObjState[value].options.length; i++) {
            tempArr.push({
                value: boxObjState[value].options[i],
                label: boxObjState[value].options[i]
            })
        }
        // console.log(value, 'tempArr');
        const tempArrNum = boxObjState[value].num

        // console.log(tempArrNum, 'tempArrNum');
        setBoxStyleName(value)
        setOptionsBoxValue(tempArr)
        setTempArrNums(tempArrNum)
    }
    const handleChangeFBV = (value) => {
        // console.log(tempArrNums, 'handleChangeFBV');
        // console.log(value, 'handleChangeFBVvalue');

        const tempArr = []
        tempArr.push(value)
        setsHandleChangeSetBOX(tempArr)

    }
    const onSelect = () => {
        // console.log(boxStyleName, 'boxObjState');
        // console.log(sHandleChangeSetBOX[0], 'sHandleChangeSetBOX');
        // console.log(optionStyle, 'optionStyle---2');


        if (boxStyleName && optionStyle) {
            setBoxStyle({
                ...BoxStyle,
                [boxStyleName]: optionStyle
            })
        } else {
            setBoxStyle({
                ...BoxStyle,
                [boxStyleName]: sHandleChangeSetBOX[0]
            })
        }
        setItemStyle({
            width: FlexBoxValueNum + 'px',
            height: FlexBoxValueNum + 'px',
        })
    }
    const handleChangeBOX = (value) => {
        setFlexBoxValueNum(value)
    }
    const handleChangeSetBOX = (value) => {
        // console.log(value, 'handleChangeSetBOX');
        // const tempArr = [sHandleChangeSetBOX[0], value]
        const tempStr = value + sHandleChangeSetBOX[0]
        console.log(tempStr, 'sHandleChangeSetBOX');
        setOptionStyle(tempStr)
    }

    const onChange = (value) => {
        console.log(`selected ${value}`);
        setValueState(value)
    };

    const getRandomColor = (index) => {
        // 预定义的颜色数组
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8C00', '#8B00FF', '#00FF8C'];
        // 通过索引获取颜色，使用模运算来循环颜色数组
        return colors[index % colors.length];

    };

    return (
        <div className='learnContainers'>
            <div className="learnHeader">
                <InputNumber
                    placeholder='盒子个数'
                    defaultValue={3}
                    onChange={onChange}
                    style={{ width: 110, marginRight: '10px' }}
                />
                <InputNumber
                    defaultValue="设置盒子大小"
                    max={150}
                    min={0}
                    style={{ width: 110, marginRight: '10px' }}
                    onChange={handleChangeBOX}
                // options={optionsBoxValueNum}
                />
                <Select
                    defaultValue="容器属性"
                    style={{ width: 110, marginRight: '10px' }}
                    onChange={handleChange}
                    options={optionsBox}
                />
                <Select
                    defaultValue="容器属性值"
                    style={{ width: 110, marginRight: '10px' }}
                    onChange={handleChangeFBV}
                    options={optionsBoxValue}
                />
                {
                    tempArrNums != 0 ? < InputNumber
                        defaultValue="输入设置大小"
                        style={{ width: 110, marginRight: '10px' }}
                        onChange={handleChangeSetBOX}

                    /> : <div style={{ width: 110 }}></div>}
                <Button type="primary" style={{ width: 110 }} onClick={onSelect}>
                    确定
                </Button>

            </div>
            <div className="learnContainer">
                <div className="learnBox" style={BoxStyle}>
                    {Array.from({ length: valueState }).map((item, index) => {
                        return <div key={index} style={{
                            background: getRandomColor(index),
                            ...ItemStyle
                        }} className='ArrayBox'></div>
                    })}

                </div>
            </div>
        </div >
    )
}

export default commonLearnComp
