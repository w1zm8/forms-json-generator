import React from "react";
import { render } from "@testing-library/react";
import TextArea from "../TextArea";

describe("TextArea", () => {
  it("renders correctly", () => {
    const { container } = render(<TextArea />);

    // test that needed layout: input inside div
    expect(container.querySelector("div > textarea")).toBeInTheDocument();
  });
  it("renders with label", () => {
    const labelText = "some textarea";
    const id = "test";
    const { getByText, getByLabelText } = render(
      <TextArea id={id} label={labelText} />
    );

    const textarea = getByLabelText(labelText);

    expect(getByText(labelText)).toBeInTheDocument();
    // test connection between label and input
    expect(textarea.tagName.toLowerCase()).toBe("textarea");
  });
});
