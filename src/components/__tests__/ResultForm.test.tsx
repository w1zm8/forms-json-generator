import React, { FC, ComponentType } from "react";
import { render } from "@testing-library/react";
import ResultForm from "../ResultForm";
import { title, items, controls } from "../__mocks__/formResultData";
import { FormConfigProvider } from "../../contexts/FormConfigContext";
import formConfigReducer from "../../reducers/formConfigReducer";

const Wrapper: FC<{
  children: React.ReactChildren;
}> = ({ children }) => (
  <FormConfigProvider
    initialState={{
      data: {
        title,
        items,
        controls,
      },
    }}
    reducer={formConfigReducer}
  >
    {children}
  </FormConfigProvider>
);

describe("ResultForm", () => {
  it("renders form", () => {
    const { getByText, container } = render(<ResultForm />, {
      wrapper: Wrapper as ComponentType,
    });

    expect(getByText(title)).toBeInTheDocument();
    expect(container.querySelector("form")).toBeInTheDocument();
    expect(container.querySelectorAll("input, textarea")).toHaveLength(
      items.length
    );
    expect(container.querySelectorAll("button")).toHaveLength(controls.length);
  });
});
