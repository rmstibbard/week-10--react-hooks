import React, { useState } from "react";

const PasswordStrength = () => {

    const [value, setValue] = useState("");

    const handleChange = (e) => setValue(e.currentTarget.value);

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
        if (length >= 16) {
            return { backgroundColor: 'green' }
        }
    }

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