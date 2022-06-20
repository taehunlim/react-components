import React from 'react'
import { render, act, fireEvent } from "@testing-library/react";

import Tabs from "../index";

import {ThemeProvider} from "@emotion/react";
import theme from "../../../../assets/styles/theme";

const initState = "first";
const onChange = jest.fn();
onChange.mockImplementation((activeKey) => activeKey);

test("Tabs onChange test", () => {
    const component = render(
        <ThemeProvider theme={theme}>
            <Tabs onChange={onChange} defaultActiveKey={initState}>
                <Tabs.Tab activeKey="first" tabName="첫번째">
                    first
                </Tabs.Tab>
                <Tabs.Tab activeKey="second" tabName="두번째">
                    second
                </Tabs.Tab>
            </Tabs>
        </ThemeProvider>
    );

    act(() => {
        fireEvent.click(component.getByText("첫번째"));
    });
    expect(onChange).toBeCalledWith("first");

    act(() => {
        fireEvent.click(component.getByText("두번째"));
    });
    expect(onChange).toBeCalledWith("second");
})

test("If Tabs has a children that is not Tabs.Tab", () => {
    expect(() => render(
        <ThemeProvider theme={theme}>
            <Tabs onChange={onChange} defaultActiveKey={initState}>
                <Tabs.Tab activeKey="first" tabName="첫번째">
                    first
                </Tabs.Tab>
                <Tabs.Tab activeKey="second" tabName="두번째">
                    second
                </Tabs.Tab>
                <div>Three</div>
            </Tabs>
        </ThemeProvider>
    )).toThrow('Tabs component children should be Tab component')
})