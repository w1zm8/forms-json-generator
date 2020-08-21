import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import FormControlsViewer from "../FormControlsViewer";
import { FormsConfigControl } from "../../types";
import Field from "../Field";

const controls: FormsConfigControl[] = [
  {
    label: "Ok",
    props: {
      type: "button",
    },
  },
  {
    label: "Cancel",
    props: {
      type: "reset",
    },
  },
  {
    label: "Apply",
    props: {
      type: "submit",
    },
  },
];

describe("FormControlsViewer", () => {
  it("renders", () => {
    const mockSubmit = jest.fn();
    const usernameLabel = "Username";
    const username = faker.internet.userName();

    const { container, getByLabelText, getByText } = render(
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          const [username] = target.elements as any;

          mockSubmit({
            username: username.value,
          });
        }}
      >
        <Field
          type="text"
          name="username"
          id="username"
          label={usernameLabel}
        />
        <FormControlsViewer controls={controls} />
      </form>
    );

    expect(container.querySelectorAll("button")).toHaveLength(controls.length);

    const inputUsername = getByLabelText(usernameLabel);
    const submitBtn = getByText(/apply/i);
    const resetBtn = getByText(/cancel/i);

    expect(submitBtn).toBeInTheDocument();
    expect(resetBtn).toBeInTheDocument();

    userEvent.type(inputUsername, username);
    userEvent.click(submitBtn);

    expect(mockSubmit).toHaveBeenCalledWith({
      username,
    });
  });
});
