import React, { useState } from "react";

const Square = ({ colour }) => {

    const [isGreen, setIsGreen] = useState(true);

    const changeColour = () => setIsGreen(!isGreen);

    const backgroundColour = isGreen ? "green" : colour;

    return (
        <div
            onClick={changeColour}
            style={{
                height: 200,
                width: 200,
                backgroundColor: backgroundColour,
            }}
        />
    );
};

export default Square;