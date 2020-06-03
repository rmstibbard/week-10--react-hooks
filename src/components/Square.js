import React, { useState } from "react";

const Square = ({ colour }) => {

    const [green, setGreen] = useState(true);

    const changeColour = () => setGreen(!green);

    const backgroundColour = green ? "green" : colour;

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