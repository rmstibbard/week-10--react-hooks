import React, { useState } from "react";

const Square = ({ colour }) => {

    const [isDefaultColour, setIsDefaultColour] = useState(true);

    const changeColour = () => setIsDefaultColour(!isDefaultColour);

    const backgroundColour = isDefaultColour ? "green" : colour;

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