import React, { FC, ReactChildren, ComponentType } from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfigForm from "../ConfigForm";
import { FormConfigProvider } from "../../contexts/FormConfigContext";
import formConfigReducer from "../../reducers/formConfigReducer";

const Wrapper: FC<{
  children: ReactChildren;
}> = ({ children }) => (
  <FormConfigProvider
    initialState={{
      data: {
        title: "test",
        items: [],
        controls: [],
      },
      error: null,
    }}
    reducer={formConfigReducer}
  >
    {children}
  </FormConfigProvider>
);

const formConfigJson = JSON.stringify({
  title: "some",
  items: [],
  controls: [],
});
const invalidFormConfigJson = "{ test, smth }";

describe("ConfigForm", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText, queryByTestId } = render(<ConfigForm />, {
      wrapper: Wrapper as ComponentType,
    });

    expect(getByTestId("form-config")).toBeInTheDocument();

    const textarea = getByTestId("data");
    const applyBtn = getByText(/apply/i);

    expect(textarea).toBeInTheDocument();
    expect(applyBtn).toBeInTheDocument();

    userEvent.type(textarea, formConfigJson);

    expect(queryByTestId("error")).not.toBeInTheDocument();
    expect(applyBtn).not.toBeDisabled();

    userEvent.click(applyBtn);

    userEvent.type(textarea, invalidFormConfigJson);

    expect(getByTestId("error")).toBeInTheDocument();
    expect(applyBtn).toBeDisabled();
  });
});
