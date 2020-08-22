import React, { FC, ComponentType, ReactElement } from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfigForm from "../ConfigForm";
import { FormConfigProvider } from "../../contexts/FormConfigContext";
import formConfigReducer, {
  initialState,
} from "../../reducers/formConfigReducer";

const Wrapper: FC<{
  children: ReactElement;
}> = ({ children }) => (
  <FormConfigProvider initialState={initialState} reducer={formConfigReducer}>
    {children}
  </FormConfigProvider>
);

const formConfigJson = JSON.stringify({
  title: "some",
  items: [],
  controls: [],
});
const invalidFormConfigJson = "{ test, smth }";
const invalidFormConfigJsonMore = '{ "items": "123", "controls": "123" }';

describe("ConfigForm", () => {
  it("renders correctly", () => {
    const { getByTestId, getByText, queryByTestId, container } = render(
      <ConfigForm onSubmit={() => {}} />,
      {
        wrapper: Wrapper as ComponentType,
      }
    );

    expect(getByTestId("form-config")).toBeInTheDocument();

    const textarea = getByTestId("data");
    const applyBtn = getByText(/apply/i);

    expect(applyBtn).toBeDisabled();

    expect(textarea).toBeInTheDocument();
    expect(applyBtn).toBeInTheDocument();

    userEvent.type(textarea, formConfigJson);

    expect(queryByTestId("error")).not.toBeInTheDocument();
    expect(applyBtn).not.toBeDisabled();

    userEvent.click(applyBtn);

    userEvent.type(textarea, invalidFormConfigJson);

    expect(getByTestId("error")).toBeInTheDocument();
    expect(container.querySelectorAll("ul>li")).toHaveLength(1);
    expect(applyBtn).toBeDisabled();

    userEvent.type(textarea, invalidFormConfigJsonMore);
    expect(container.querySelectorAll("ul>li")).toHaveLength(2);
  });
});
