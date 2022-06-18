import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";

import ToggleButton from "../ToggleButton";

test("button text changes from ON to OFF when clicked", () => {
    render(<ToggleButton />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("OFF");

    fireEvent.click(button);

    expect(button).toHaveTextContent("ON");
});

test("button text is ON given initial set to true", () => {
    render(<ToggleButton initial={true} />);

    expect(screen.getByRole("button", { name: /on/i })).toBeInTheDocument();
});