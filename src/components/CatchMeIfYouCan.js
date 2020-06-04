import React, { useState } from "react";

const CatchMeIfYouCan = ({ jump }) => {

    const [pos, setPos] = useState(0);

    const click = () => setPos(pos + jump);

    return (
        <button
            style={{ top: pos + "px" }}
            onClick={click}
            className="catch-me">
            Catch Me If You Can!
        </button>
    );
}




export default CatchMeIfYouCan;