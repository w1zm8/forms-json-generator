import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import "../index.css";

import Field, { Props as FieldProps } from "../components/Field";

export default {
  title: "Example/Field",
  component: Field,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<FieldProps> = (args) => <Field {...args} />;

export const TextField = Template.bind({});
TextField.args = {
  placeholder: "Enter username",
  type: "text",
};

export const TextFieldWithLabel = Template.bind({});
TextFieldWithLabel.args = {
  label: "Username",
  placeholder: "Enter username",
  type: "text",
  id: "username",
};

export const NumberField = Template.bind({});
NumberField.args = {
  type: "number",
  defaultValue: 12,
};

export const DateField = Template.bind({});
DateField.args = {
  type: "date",
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  type: "checkbox",
};

export const CheckboxWithLabel = Template.bind({});
CheckboxWithLabel.args = {
  label: "I accept agreement",
  type: "checkbox",
  id: "agreement",
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  type: "radio",
};

export const RadioButtonWithLabel = Template.bind({});
RadioButtonWithLabel.args = {
  label: "None",
  type: "radio",
};
