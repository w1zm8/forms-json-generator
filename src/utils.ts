import { getRequiredFieldMsg, getFieldWrongTypeMsg } from "./helpers";
import { FormsConfigData } from "./types";

export const validateFormData = (data: string): string[] | null => {
  let configData: FormsConfigData | Pick<FormsConfigData, "title"> = {};
  let errors: string[] | null = null;

  try {
    configData = JSON.parse(data);
  } catch (e) {
    errors = ["Invalid JSON data"];
  }

  if (errors !== null) {
    return errors;
  }

  errors = [];
  const keys = ["items", "controls"];

  keys.forEach((key: string) => {
    if (!configData.hasOwnProperty(key)) {
      errors?.push(getRequiredFieldMsg(key));
    } else if (!Array.isArray((configData as any)[key])) {
      errors?.push(getFieldWrongTypeMsg(key, "an array"));
    }
  });

  if (configData.title && typeof configData.title !== "string") {
    errors?.push(getFieldWrongTypeMsg("title", "a string"));
  }

  return !errors.length ? null : errors;
};
