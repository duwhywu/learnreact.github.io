import React from "react";
import './plugin1.css'

function Plugin1() {
    // 函数体本身就相当于一个render函数
    return (
        <div>
            <h1>赛博朋克按钮</h1>
            <div className="Plugin1">
                <div className="button">
                    <div className="glitch"></div>
                    <div className="text" data-text="赛博按钮">赛博按钮</div>
                    <span className="platform">blibli</span>
                </div>
            </div>
        </div>
    );
}

export default Plugin1;