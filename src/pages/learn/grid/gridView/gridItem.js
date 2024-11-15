export const GridBoxStyle = {
    "grid-template-columns": {
        "description": "定义每一列的宽度，使用长度单位或百分比。也可使用`repeat()`、`auto-fit`等。",
        "options": ["px", "%", "auto", "repeat()", "minmax()", "auto-fit", "auto-fill"],
        "num": 2
    },
    "grid-template-rows": {
        "description": "定义每一行的高度，使用长度单位或百分比。",
        "options": ["px", "%", "auto", "repeat()", "minmax()"],
        "num": 2
    },
    "grid-template-areas": {
        "description": "通过命名区域来定义网格布局。",
        "options": ["'area-name'", "none"],
        "num": 0
    },
    "grid-template": {
        "description": "用于`grid-template-rows`、`grid-template-columns`和`grid-template-areas`的简写形式。",
        "options": ["grid-template-rows", "grid-template-columns", "grid-template-areas"],
        "num": 0
    },
    "grid-column-gap": {
        "description": "定义网格项目之间的列间距。",
        "options": ["px", "em", "rem", "%"],
        "num": 2
    },
    "grid-row-gap": {
        "description": "定义网格项目之间的行间距。",
        "options": ["px", "em", "rem", "%"],
        "num": 2
    },
    "grid-gap": {
        "description": "用于`grid-row-gap`和`grid-column-gap`的简写形式。",
        "options": ["px", "em", "rem", "%"],
        "num": 2
    },
    "justify-items": {
        "description": "定义网格项目在单元格内的水平对齐方式。",
        "options": ["start", "end", "center", "stretch"],
        "num": 0
    },
    "align-items": {
        "description": "定义网格项目在单元格内的垂直对齐方式。",
        "options": ["start", "end", "center", "stretch"],
        "num": 0
    },
    "justify-content": {
        "description": "定义整个网格容器的水平对齐方式。",
        "options": ["start", "end", "center", "space-between", "space-around", "space-evenly"],
        "num": 0
    },
    "align-content": {
        "description": "定义整个网格容器的垂直对齐方式。",
        "options": ["start", "end", "center", "space-between", "space-around", "space-evenly"],
        "num": 0
    }
};

export const GridItemStyle = {
    "grid-column-start": {
        "description": "指定网格项目的起始列。",
        "options": ["整数值", "span"],
        "num": 1
    },
    "grid-column-end": {
        "description": "指定网格项目的结束列。",
        "options": ["整数值", "span"],
        "num": 1
    },
    "grid-column": {
        "description": "用于`grid-column-start`和`grid-column-end`的简写形式。",
        "options": ["grid-column-start", "grid-column-end"],
        "num": 0
    },
    "grid-row-start": {
        "description": "指定网格项目的起始行。",
        "options": ["整数值", "span"],
        "num": 1
    },
    "grid-row-end": {
        "description": "指定网格项目的结束行。",
        "options": ["整数值", "span"],
        "num": 1
    },
    "grid-row": {
        "description": "用于`grid-row-start`和`grid-row-end`的简写形式。",
        "options": ["grid-row-start", "grid-row-end"],
        "num": 0
    },
    "grid-area": {
        "description": "用于指定项目放置在哪个命名区域，或者指定起始和结束位置。",
        "options": ["area-name", "grid-row-start / grid-column-start / grid-row-end / grid-column-end"],
        "num": 0
    },
    "justify-self": {
        "description": "定义单个网格项目在单元格内的水平对齐方式。",
        "options": ["start", "end", "center", "stretch"],
        "num": 0
    },
    "align-self": {
        "description": "定义单个网格项目在单元格内的垂直对齐方式。",
        "options": ["start", "end", "center", "stretch"],
        "num": 0
    }
};
