import React, { useState } from "react";

const Counter = ({ initial, max }) => {

    const [result, setResult] = useState(initial);

    const countUp = () => setResult(
        result >= max ? max : result + 1
    );
    const countDown = () => setResult(
        result <= 0 ? 0 : result - 1
    );

    return (
        <>
            <p>{result}</p>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    )
}

export default Counter;