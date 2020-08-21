import React from "react";
import { render } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("Checkbox", () => {
  test("renders correctly", () => {
    const { container } = render(<Checkbox />);

    // test that needed layout: input inside div
    expect(container.querySelector("div > input")).toBeInTheDocument();
  });
  test("renders with label", () => {
    const labelText = "some checkbox";
    const id = "test";
    const { getByText, getByLabelText } = render(
      <Checkbox label={labelText} id={id} />
    );

    const input = getByLabelText(labelText);

    expect(getByText(labelText)).toBeInTheDocument();
    // test connection between label and input
    expect(input.tagName.toLowerCase()).toBe("input");
  });
});
