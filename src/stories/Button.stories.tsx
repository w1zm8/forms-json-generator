import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import "../index.css";

import Button, { Props as ButtonProps } from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Button",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "Button",
};

export const Light = Template.bind({});
Light.args = {
  variant: "light",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  variant: "primary",
  children: "Button",
  size: "small",
};
