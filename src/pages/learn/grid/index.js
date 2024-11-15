import CommonLearnComp from '../../../components/commonLearn'
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import './style.css'
import { GridBoxStyle, GridItemStyle } from './gridView/gridItem'

function learnFlex() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <h1>grid概述</h1>
            <p>grid布局，也叫网格布局，是一种将页面分割成多栏或者多行，然后放入元素来填充整个网格的布局方式。</p>
            <img src="https://cdn.beekka.com/blogimg/asset/201903/1_bg2019032501.png"></img>
            <p>
                Grid 布局与 Flex 布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，它们也存在重大区别。
                Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。
            </p>
            <Button type='primary' onClick={() => showModal()}>打开一个测试窗口</Button>
            <div>
                <Modal className='GridModals' title="Grid测试" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <CommonLearnComp boxObj={GridBoxStyle} itemObj={GridItemStyle}></CommonLearnComp>
                </Modal>
            </div>
        </div >
    );
}

export default learnFlex;