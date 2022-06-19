import {renderHook} from "@testing-library/react";

import useTabs from "../index";

test("update state from false to true when toggle is called", () => {
    const {result} = renderHook(() =>
        useTabs("first", <div activeKey="first" tabName="잉">
                        121
                    </div>
                    <div activeKey="second" tabName="잉엥">
                        2323
                    </div>
                  )
    );

    expect(result.current?.currentItem).toBe("first")
})