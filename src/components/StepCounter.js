import React, { useState } from "react";

const StepCounter = ({ max, step }) => {

    const [result, setResult] = useState(0);

    const countUp = () => setResult(
        result >= max ? max : result + step
    );

    const countDown = () => setResult(
        result <= 0 ? 0 : result - step
    );

    return (
        <>
            <p>{result}</p>
            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>
        </>
    )
}


export default StepCounter;