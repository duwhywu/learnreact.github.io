import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import 'markdown-navbar/dist/navbar.css';
import './learn.css';
import md from '../../../file/md/react补充.md'

// 要遍历并显示 ../../file/md 目录下的所有 Markdown 文件，你可以使用 Webpack 的 require.context 来动态导入目录中的所有 .md 文件。
// JavaScript 原生不支持直接读取目录中的文件，但 Webpack 可以帮忙在编译时将文件打包进来。
// 以下是具体步骤：
// 使用 Webpack 的 require.context：
// 先用 require.context 加载目录中所有 .md 文件，生成一个模块集合。
// 遍历文件内容并显示：
// 将文件内容读取后，逐个显示。

const Learn = () => {

    const [mddata, setmdData] = useState('')

    useEffect(() => {
        fetch(md).then(res => res.text()).then(text => {
            setmdData(text)
        })
    }, [])

    return (
        <Markdown>{mddata}</Markdown>
    );
};
export default Learn;
