import { renderHook, act } from "@testing-library/react";

import useToggle from "../useToggle";

test("update state from false to true when toggle is called", () => {
    const { result } = renderHook((useToggle));

    expect(result.current.state).toBe(false);

    act(() => {
        result.current.toggle()
    });

    expect(result.current.state).toBe(true);
});

test("allows for initial value", () => {
    const { result } = renderHook(() => useToggle(true));

    const {state} = result.current;

    expect(state).toBe(true);
});