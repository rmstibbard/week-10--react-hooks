
import React, { useState } from "react";

const Clicked = () => {
    const [clicked, setClicked] = useState(false);

    const click = () => setClicked(true);

    return (
        <p onClick={click}>
            {clicked ? "Clicked" : "Not clicked"}
        </p>
    );
}

export default Clicked;
