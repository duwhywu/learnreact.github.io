# Flex



来自[Flex 布局教程：语法篇 - 阮一峰的网络日志](https://ruanyifeng.com/blog/2015/07/flex-grammar.html)

布局的传统解决方案，基于[盒状模型](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)，依赖 [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 属性 + [`position`](https://developer.mozilla.org/en-US/docs/Web/CSS/position)属性 + [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float)属性。它对于那些特殊布局非常不方便，比如，[垂直居中](https://css-tricks.com/centering-css-complete-guide/)就不容易实现。

## 一、Flex 布局是什么？

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

```css
.box{
  display: flex;
}
```

行内元素也可以使用 Flex 布局。

> ```css
> .box{
>   display: inline-flex;
> }
> ```

注意，**设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效**。

## 二、基本概念

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。

![img](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

容器默认存在两根轴：**水平的主轴（main axis）和垂直的交叉轴（cross axis）**。

**主轴**的**开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；**

**交叉轴**的**开始位置叫做`cross start`，****结束位置叫做`cross end`。**

项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

## 三、容器的属性（6个）

| 属性            | 作用                                                         | 写法（属性值）                                               |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| flex-direction  | 决定主轴的方向（即项目的排列方向）                           | row \| row-reverse \| column \| column-reverse;              |
| flex-wrap       | 默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。 | nowrap \| wrap \| wrap-reverse                               |
| flex-flow       | 是`flex-direction`属性和`flex-wrap`属性的简写形式            | <flex-direction> \|\| <flex-wrap>                            |
| justify-content | 项目在主轴上的对齐方式。                                     | flex-start \| flex-end \| center \| space-between \| space-around; |
| align-items     | 在交叉轴上如何对齐。                                         | flex-start \| flex-end \| center \| baseline \| stretch;     |
| align-content   | 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。 | flex-start \| flex-end \| center \| space-between \| space-around \| stretch; |

## 四、项目的属性（6个）

| 属性        | 作用                                                         | 写法（属性值）                                               |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| order       | 定义项目的排列顺序。数值越小，排列越靠前，默认为0。          | Number值                                                     |
| flex-grow   | 定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。 | Number值                                                     |
| flex-shrink | 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。 | Number值                                                     |
| flex-basis  | 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。 | length值（如px后缀）                                         |
| flex        | 是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。 | none \| [ <'flex-grow'> <'flex-shrink'>? \|\| <'flex-basis'> ] |
| align-self  | 允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。 | auto \| flex-start \| flex-end \| center \| baseline \| stretch; } |















