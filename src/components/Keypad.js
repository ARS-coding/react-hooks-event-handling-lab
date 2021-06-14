import React from "react";

function Keypad() {

    function keyPadEventHandler() {
        console.log("Entering password...")
    }

    return (
        <input onChange={keyPadEventHandler} type="password" />
    )

};

export default Keypad;