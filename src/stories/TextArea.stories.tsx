import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import "../index.css";

import TextArea, { Props as TextAreaProps } from "../components/TextArea";

export default {
  title: "Example/TextArea",
  component: TextArea,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Enter description",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  placeholder: "Enter description",
  label: "Description",
};
