import { useState, useCallback } from "react";

const useToggle = (initialState = false): any => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state: any) => !state), []);
    return {state, toggle};
};

export default useToggle;