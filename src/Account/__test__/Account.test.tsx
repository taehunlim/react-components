import React from 'react';
import Account from "../Account";
import {render} from "@testing-library/react";

it("matches snapshot", () => {
    const utils = render(<Account name="호박 고구마" mbti="ENTP"/>);
    expect(utils.container).toMatchSnapshot();
})

it("show the props correctly", () => {
    const utils = render(<Account name="호박 고구마" mbti="ENTP"/>);
    utils.getByText("호박 고구마");
    utils.getByText("ENTP")
})