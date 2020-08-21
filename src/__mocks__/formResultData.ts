import { FormsConfigControl, FormsConfigItem } from "../types";

export const title = "Some Form";
export const items: FormsConfigItem[] = [
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
    label: "About",
    type: "text",
    props: {
      name: "about",
      id: "about",
      maxLength: 100,
    },
  },
];
export const controls: FormsConfigControl[] = [
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
