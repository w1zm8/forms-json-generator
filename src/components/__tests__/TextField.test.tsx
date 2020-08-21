import React from "react";
import { render } from "@testing-library/react";
import Field from "../Field";

describe("TextField", () => {
  it("renders correctly", () => {
    const { container } = render(<Field />);

    // test that needed layout: input inside div
    expect(container.querySelector("div > input")).toBeInTheDocument();
  });
  it("renders with label", () => {
    const labelText = "some text field";
    const id = "test";
    const { getByText, getByLabelText } = render(
      <Field label={labelText} id={id} />
    );

    const input = getByLabelText(labelText);

    expect(getByText(labelText)).toBeInTheDocument();
    // test connection between label and input
    expect(input.tagName.toLowerCase()).toBe("input");
  });
});
