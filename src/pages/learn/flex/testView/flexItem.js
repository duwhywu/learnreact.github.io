import { number } from "echarts"

  
// num: 0 | 1 | 2 表示  无长度单位 | number | length
export const FlexBoxStyle = {
    "flex-direction": {
        "description": "决定主轴的方向（即项目的排列方向）",
        "options": ["row", "row-reverse", "column", "column-reverse"],
        "num": 0,

    },
    "flex-wrap": {
        "description": "默认情况下，项目都排在一条线（又称'轴线'）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。",
        "options": ["nowrap", "wrap", "wrap-reverse"],
        "num": 0,

    },
    "flex-flow": {
        "description": "`flex-direction`属性和`flex-wrap`属性的简写形式",
        "options": ["flex-direction", "flex-wrap"],
        "num": 0,

    },
    "justify-content": {
        "description": "项目在主轴上的对齐方式。",
        "options": ["flex-start", "flex-end", "center", "space-between", "space-around"],
        "num": 0,

    },
    "align-items": {
        "description": "在交叉轴上如何对齐。",
        "options": ["flex-start", "flex-end", "center", "baseline", "stretch"],
        "num": 0,

    },
    "align-content": {
        "description": "定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。",
        "options": ["flex-start", "flex-end", "center", "space-between", "space-around", "stretch"],
        "num": 0,

    }
}

export const FlexItemStyle = {
    "order": {
        "description": "定义项目的排列顺序。数值越小，排列越靠前，默认为0。",
        "options": "Number值",
        "num": 1,

    },
    "flex-grow": {
        "description": "定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。",
        "options": "Number值",
        "num": 1,

    },
    "flex-shrink": {
        "description": "定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。",
        "options": "Number值",
        "num": 1,

    },
    "flex-basis": {
        "description": "定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。",
        "options": "length值（如px后缀）",
        "num": 2,

    },
    "flex": {
        "description": "是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。",
        "options": "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
        "num": 0,

    },
    "align-self": {
        "description": "允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。",
        "options": "auto | flex-start | flex-end | center | baseline | stretch",
        "num": 0,

    }
}
