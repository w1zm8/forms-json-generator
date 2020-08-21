import React from "react";
import { render } from "@testing-library/react";
import CommonField from "../CommonField";
import {
  FIELD_TYPE_TEXT,
  FIELD_TYPE_STRING,
  FIELD_TYPE_NUMBER,
  FIELD_TYPE_BOOLEAN,
  FIELD_TYPE_RADIO,
  FIELD_TYPE_DATE,
} from "../../constants";

const labelText = "some field";

describe("CommonField", () => {
  describe("as Field", () => {
    it("renders as string type", () => {
      const placeholder = "some placeholder";
      const name = "username";
      const { container, rerender, getByText } = render(
        <CommonField
          type={FIELD_TYPE_STRING}
          tagProps={{ placeholder, name }}
        />
      );

      const input = container.querySelector("input") as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input.getAttribute("type")).toBe("text");

      // test some tag's attributes
      expect(input.getAttribute("placeholder")).toBe(placeholder);
      expect(input.getAttribute("name")).toBe(name);

      // tested just once for Field 'cause is the same as for any type
      rerender(<CommonField type={FIELD_TYPE_STRING} label={labelText} />);
      getByText(labelText);
    });
    it("renders as email type", () => {
      const { container } = render(
        <CommonField type={FIELD_TYPE_STRING} tagProps={{ type: "email" }} />
      );

      const input = container.querySelector("input") as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input.getAttribute("type")).toBe("email");
    });
    it("renders as number type", () => {
      const min = "0";
      const max = "10";
      const { container } = render(
        <CommonField type={FIELD_TYPE_NUMBER} tagProps={{ min, max }} />
      );

      const input = container.querySelector("input") as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input.getAttribute("type")).toBe("number");

      // test some tag's attributes
      expect(input.getAttribute("min")).toBe(min);
      expect(input.getAttribute("max")).toBe(max);
    });
    it("renders as checkbox type", () => {
      const { container } = render(<CommonField type={FIELD_TYPE_BOOLEAN} />);

      const input = container.querySelector("input") as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input.getAttribute("type")).toBe("checkbox");
    });
    it("renders as radio type", () => {
      const { container } = render(<CommonField type={FIELD_TYPE_RADIO} />);

      const input = container.querySelector("input") as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input.getAttribute("type")).toBe("radio");
    });
    it("renders as date type", () => {
      const { container } = render(<CommonField type={FIELD_TYPE_DATE} />);

      const input = container.querySelector("input") as HTMLInputElement;
      expect(input).toBeInTheDocument();
      expect(input.getAttribute("type")).toBe("date");
    });
  });
  it("renders as TextArea", () => {
    const { container, rerender, getByText } = render(
      <CommonField type={FIELD_TYPE_TEXT} />
    );

    const input = container.querySelector("textarea");
    expect(input).toBeInTheDocument();

    rerender(<CommonField type={FIELD_TYPE_TEXT} label={labelText} />);
    getByText(labelText);
  });
  it("renders null", () => {
    const someType = "testtest" as any;
    const { container } = render(<CommonField type={someType} />);

    expect(container.firstChild).toBeNull();
  });
});
