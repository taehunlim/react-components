import {renderHook, act} from "@testing-library/react";

import useTabs from "../index";

const json = [
    {activeKey: "first"},
    {activeKey: "second"},
];

test("update state from false to true when toggle is called", () => {
    const {result} = renderHook(() =>
        useTabs("first", json)
    );

    expect(result.current?.currentItem).toBe("first");

    act(() => {
        result.current?.changeItem("second");
    });

    expect(result.current?.currentItem).toBe("second");
})