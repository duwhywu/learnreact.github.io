import { useState } from "react";
import './style.css'
import { Button, InputNumber, Select } from "antd";
import { FlexBoxStyle, FlexItemStyle } from "./flexItem";

const FlexBox = []

for (const item in FlexBoxStyle) {
    FlexBox.push(
        { value: item, label: item }
    )
}

function App() {
    const [FlexBoxnum, setFlexBoxnum] = useState([])
    const [FlexBoxValue, setFlexBoxValue] = useState([]);
    const [FlexBoxValnum, setFlexBoxValnum] = useState([]);
    const [flexBoxStyle, setFlexBoxStyle] = useState({ display: 'flex' })
    const [FlexBoxValueNum, setFlexBoxValueNum] = useState(100)
    const [ItemStyle, setItemStyle] = useState({
        width: '100px',
        height: '100px',
    })


    const handleChange = (value) => {
        setFlexBoxnum(value)
        // console.log(value, 'value');

        const valueArray = FlexBoxStyle[value].options

        // 创建新的数组，并添加新的项
        const newFlexBoxValue = valueArray.map(item => ({
            value: item,
            label: item
        }));

        setFlexBoxValue(newFlexBoxValue)
    };

    const handleChangeFBV = (value) => {
        setFlexBoxValnum(value)
    }
    const handleChangeBOX = (value) => {
        setFlexBoxValueNum(value)
    }
    const onSelect = () => {
        console.log(FlexBoxnum, 'FlexBoxValue')
        console.log(FlexBoxValnum, 'FlexBoxValnumsss')
        if (FlexBoxnum && FlexBoxValnum) {
            setFlexBoxStyle({
                ...flexBoxStyle,
                [FlexBoxnum]: FlexBoxValnum
            })
        }
        setItemStyle({
            width: FlexBoxValueNum + 'px',
            height: FlexBoxValueNum + 'px',
        })
    }


    // 函数体本身就相当于一个render函数
    return (
        <div className='container4'>
            <Select
                defaultValue="容器属性"
                style={{ width: 120, marginRight: '10px' }}
                onChange={handleChange}
                options={FlexBox}
            />
            <Select
                defaultValue="容器属性值"
                style={{ width: 120, marginRight: '10px' }}
                onChange={handleChangeFBV}
                options={FlexBoxValue}
            />
            <InputNumber
                defaultValue="设置盒子大小"
                style={{ width: 120, marginRight: '10px' }}
                onChange={handleChangeBOX}
                options={FlexBoxValueNum}
            />
            <Button type='primary' onClick={onSelect}>确定</Button>
            <div className='flexBox' style={flexBoxStyle}>
                <div className='flexItem Item1' style={ItemStyle}></div>
                <div className='flexItem Item2' style={ItemStyle}></div>
                <div className='flexItem Item3' style={ItemStyle}></div>
            </div>
        </div >
    );
}

export default App;