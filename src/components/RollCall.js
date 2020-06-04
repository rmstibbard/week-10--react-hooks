import React, { useState } from "react";

const RollCall = ({ names }) => {

    const [nameIndex, setNameIndex] = useState(0);

    const click = () => {
        setNameIndex((nameIndex + 1) % names.length);
    }

    return (
        <>
            <button onClick={click}>Next</button >
            <p>{names[nameIndex]}</p>
        </>
    )
}

export default RollCall;