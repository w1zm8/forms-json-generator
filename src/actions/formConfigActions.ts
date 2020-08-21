import { Action } from "../types";

export const UPDATE_FORM_CONFIG = "UPDATE_FORM_CONFIG";
export const VALIDATE_FORM_CONFIG = "VALIDATE_FORM_CONFIG";

export const updateFormConfig = (data: string): Action => {
  const payload = JSON.parse(data);

  return {
    type: UPDATE_FORM_CONFIG,
    payload,
  };
};

export const validateFormConfig = (data: string): Action => {
  let payload = null;

  try {
    JSON.parse(data);
  } catch (e) {
    payload = "Invalid JSON data";
  }

  return {
    type: VALIDATE_FORM_CONFIG,
    payload,
  };
};
