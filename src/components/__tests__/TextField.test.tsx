import React from "react";
import { render } from "@testing-library/react";
import TextField from "../TextField";

describe("TextField", () => {
  it("renders correctly", () => {
    const { container } = render(<TextField />);

    // test that needed layout: input inside div
    expect(container.querySelector("div > input")).toBeInTheDocument();
  });
  it("renders with label", () => {
    const labelText = "some text field";
    const id = "test";
    const { getByText, getByLabelText } = render(
      <TextField label={labelText} id={id} />
    );

    const input = getByLabelText(labelText);

    expect(getByText(labelText)).toBeInTheDocument();
    // test connection between label and input
    expect(input.tagName.toLowerCase()).toBe("input");
  });
});
