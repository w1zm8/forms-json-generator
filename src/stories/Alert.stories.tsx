import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import "../index.css";

import Alert from "../components/Alert";

export default {
  title: "Example/Alert",
  component: Alert,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const AlertError = () => <Alert>Failed to fetch something</Alert>;
