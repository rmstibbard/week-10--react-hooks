import React, { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const updateCounter = () => setCounter(counter + 1);

    return <p onClick={updateCounter}>{counter}</p>;

}

export default Counter;