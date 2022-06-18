import React from 'react';

import useToggle from "../../hooks/useToggle/useToggle";

function ToggleButton({ initial = false }) {
    const {state, toggle} = useToggle(initial);

    return <button onClick={toggle}>{state ? "ON" : "OFF"}</button>;
}

export default ToggleButton;