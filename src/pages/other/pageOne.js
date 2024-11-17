import React from "react";
function PageOne() {
    // 函数体本身就相当于一个render函数
    return (
        <div className='PageOne'>
            {/* <h1>Plugin2</h1> */}
            <iframe style={{ width: '100%', height: '500px' }} src="https://www.baidu.com"></iframe>
        </div>
    );
}

export default PageOne;


