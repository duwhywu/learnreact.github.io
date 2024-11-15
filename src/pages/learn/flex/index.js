import { useState } from 'react';
import './style.css'
import TestView from './testView';
import { Button, Modal } from 'antd';

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

    const openModal = () => {
        setOpenView(true)
    }

    // 函数体本身就相当于一个render函数
    return (
        <div className='learnFlex'>
            <div className='container1'>
                <h1>Flex布局</h1>
                <div className='a'>
                    <a href='https://ruanyifeng.com/blog/2015/07/flex-grammar.html'>链接：来自[Flex 布局教程：语法篇 - 阮一峰的网络日志]</a>
                </div>
                <p>布局的传统解决方案，基于盒状模型，依赖 `display`属性 + `position`属性 + `float`属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。</p>
                <img src='http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png'></img>
            </div>
            <div className='container2'>
                <h2>容器属性（6个）</h2>
                <table>
                    <tr>
                        <th>属性</th>
                        <th>作用</th>
                        <th>写法（属性值）</th>
                    </tr>
                    <tr>
                        <td>flex-direction</td>
                        <td>决定主轴的方向（即项目的排列方向）</td>
                        <td>row | row-reverse | column | column-reverse;</td>
                    </tr>
                    <tr>
                        <td>flex-wrap</td>
                        <td>默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。</td>
                        <td>nowrap | wrap | wrap-reverse</td>
                    </tr>
                    <tr>
                        <td>flex-flow</td>
                        <td>是`flex-direction`属性和`flex-wrap`属性的简写形式</td>
                        <td>flex-direction | flex-wrap</td>
                    </tr>
                    <tr>
                        <td>justify-content</td>
                        <td>项目在主轴上的对齐方式。</td>
                        <td>flex-start | flex-end | center | space-between | space-around</td>
                    </tr>
                    <tr>
                        <td>align-items</td>
                        <td>在交叉轴上如何对齐。</td>
                        <td>flex-start | flex-end | center | baseline | stretch</td>
                    </tr>
                    <tr>
                        <td>align-content</td>
                        <td>定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</td>
                        <td>flex-start | flex-end | center | space-between | space-around | stretch</td>
                    </tr>
                </table>
            </div>
            <div className='container3'>
                <h2>项目属性（6个）</h2>
                <table>
                    <thead>
                        <tr>
                            <th>属性</th>
                            <th>作用</th>
                            <th>写法（属性值）</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>order</td>
                            <td>定义项目的排列顺序。数值越小，排列越靠前，默认为0</td>
                            <td>Number值</td>
                        </tr>
                        <tr>
                            <td>flex-grow</td>
                            <td>定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。</td>
                            <td>Number值</td>
                        </tr>
                        <tr>
                            <td>flex-shrink</td>
                            <td>定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</td>
                            <td>Number值</td>
                        </tr>
                        <tr>
                            <td>flex-basis</td>
                            <td>定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。</td>
                            <td>length值</td>
                        </tr>
                        <tr>
                            <td>flex</td>
                            <td>是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。</td>
                            <td>none | (flex-grow)+(flex-shrink)+(flex-basis)</td>
                        </tr>
                        <tr>
                            <td>align-self</td>
                            <td>允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。</td>
                            <td>auto | flex-start | flex-end | center | baseline | stretch; </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Button type='primary' onClick={() => showModal()}>打开一个测试窗口</Button>
            <div className='FlexModals'>
                <Modal title="Flex测试 容器盒子450px*450px" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <TestView></TestView>
                </Modal>
            </div>
        </div>
    );
}

export default learnFlex;