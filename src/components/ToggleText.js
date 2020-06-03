import React, { useState } from "react";

const ToggleText = ({ initial, alternate }) => {

    const [isInitial, setInitial] = useState(true);

    const toggle = () => setInitial(!isInitial);

    return (
        <p onClick={toggle}>
            {isInitial ? initial : alternate}
        </p>
    );
};

export default ToggleText;