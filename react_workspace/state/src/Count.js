import React, { useState } from 'react';//rsf

function Count(props) {
    //function hook : useState 사용
    const [count, setCount] = useState(0);
    // useState - 함수적 갱신, 변수와 함수 선언필요

    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default Count;