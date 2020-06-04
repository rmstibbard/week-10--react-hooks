import React, { useState } from "react";

const setColour = (value) => {
    let length = value.length;

    if (length === 0) {
        return { backgroundColor: '' }
    }
    if (length < 9) {
        return { backgroundColor: 'red' }
    }
    if (length < 16) {
        return { backgroundColor: 'orange' }
    }

    return { backgroundColor: 'green' }

}

const PasswordStrength = () => {

    const [value, setValue] = useState("");

    const handleChange = (e) => setValue(e.currentTarget.value);

    return (
        <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={value}
            style={setColour(value)}
        />
    );

}

export default PasswordStrength;