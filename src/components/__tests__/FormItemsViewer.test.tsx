import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import FormItemsViewer from "../FormItemsViewer";
import { FormsConfigItem, InputProps, TextareaProps } from "../../types";

const EMAIL_INDEX = 0;
const USERNAME_INDEX = 1;
const AGE_INDEX = 2;
const ABOUT_INDEX = 3;
const MALE_INDEX = 4;
const BIRTH_INDEX = 7;
const AGREEMENT_INDEX = 8;

const [birth] = faker.date.past(10).toISOString().split("T");

const formValues = {
  birth,
  email: faker.internet.email(),
  username: faker.internet.userName(),
  age: faker.random.number(80) + "",
  about: faker.lorem.text(),
};

const mockItems: FormsConfigItem[] = [
  {
    label: "Email",
    type: "string",
    props: {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Enter email",
    },
  },
  {
    label: "Username",
    type: "string",
    props: {
      name: "username",
      id: "username",
      placeholder: "Enter username",
    },
  },
  {
    label: "Age",
    type: "number",
    props: {
      name: "age",
      id: "age",
      min: "0",
    },
  },
  {
    label: "About",
    type: "text",
    props: {
      name: "about",
      id: "about",
      maxLength: 100,
    },
  },
  {
    label: "Male",
    type: "radio",
    props: {
      name: "gender",
      id: "male",
      value: "male",
    },
  },
  {
    label: "Female",
    type: "radio",
    props: {
      name: "gender",
      id: "female",
      value: "female",
    },
  },
  {
    label: "None",
    type: "radio",
    props: {
      name: "gender",
      id: "none",
      value: "none",
      checked: true,
    },
  },
  {
    label: "Birthday",
    type: "date",
    props: {
      name: "birth",
      id: "birth",
    },
  },
  {
    label: "I agree to Privacy Policy",
    type: "boolean",
    props: {
      name: "agreement",
      id: "agreement",
    },
  },
];

describe("FormItemsViewer", () => {
  it("renders items", () => {
    const mockSubmit = jest.fn();

    const { container, getByLabelText, getByText } = render(
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          const [
            email,
            username,
            age,
            about,
            gender,
            ,
            ,
            birth,
            agreement,
          ] = target.elements as any;

          mockSubmit({
            email: email.value,
            username: username.value,
            age: age.value,
            about: about.value,
            gender: gender.value,
            birth: birth.value,
            agreement: agreement.value,
          });
        }}
      >
        <FormItemsViewer items={mockItems} />
        <button type="submit">Submit</button>
      </form>
    );

    expect(container.querySelectorAll("input, textarea")).toHaveLength(
      mockItems.length
    );

    // test that we have labels in the document and they are connected with inputs

    const inputEmail = getByLabelText(mockItems[EMAIL_INDEX].label as string);
    expect(inputEmail).toBeInTheDocument();
    const inputEmailProps = mockItems[EMAIL_INDEX].props as InputProps;
    expect(inputEmail.getAttribute("type")).toBe(inputEmailProps.type); // email
    expect(inputEmail.getAttribute("placeholder")).toBe(
      mockItems[EMAIL_INDEX].props?.placeholder
    );

    const inputUsername = getByLabelText(
      mockItems[USERNAME_INDEX].label as string
    );
    expect(inputUsername).toBeInTheDocument();
    expect(inputUsername.getAttribute("placeholder")).toBe(
      mockItems[USERNAME_INDEX].props?.placeholder
    );

    const inputAge = getByLabelText(mockItems[AGE_INDEX].label as string);
    expect(inputAge).toBeInTheDocument();
    const inputAgeProps = mockItems[AGE_INDEX].props as InputProps; // number
    expect(inputAge.getAttribute("type")).toBe(mockItems[AGE_INDEX].type);
    expect(inputAge.getAttribute("min")).toBe(inputAgeProps.min);

    const aboutText = getByLabelText(mockItems[ABOUT_INDEX].label as string);
    expect(aboutText).toBeInTheDocument();
    const aboutTextProps = mockItems[ABOUT_INDEX].props as TextareaProps;
    expect(aboutText.getAttribute("maxLength")).toBe(
      `${aboutTextProps.maxLength}`
    );

    const maleRadioBtn = getByLabelText(mockItems[MALE_INDEX].label as string);
    expect(maleRadioBtn).toBeInTheDocument();
    expect(maleRadioBtn.getAttribute("type")).toBe("radio");

    const inputBirth = getByLabelText(mockItems[BIRTH_INDEX].label as string);
    expect(inputBirth).toBeInTheDocument();
    expect(inputBirth.getAttribute("type")).toBe("date");

    const checkboxAgreement = getByLabelText(
      mockItems[AGREEMENT_INDEX].label as string
    );
    expect(checkboxAgreement).toBeInTheDocument();
    expect(checkboxAgreement.getAttribute("type")).toBe("checkbox");

    const submitBtn = getByText(/submit/i);
    expect(submitBtn).toBeInTheDocument();

    userEvent.type(inputEmail, formValues.email);
    userEvent.type(inputUsername, formValues.username);
    userEvent.type(inputAge, `${formValues.age}`);
    userEvent.type(aboutText, formValues.about);
    fireEvent.change(inputBirth, {
      target: {
        value: birth,
      },
    });
    userEvent.click(maleRadioBtn);
    userEvent.click(checkboxAgreement);
    userEvent.click(submitBtn);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      ...formValues,
      gender: "male",
      agreement: "on",
    });
  });
});
