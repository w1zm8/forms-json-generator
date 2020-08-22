import { Action } from "../types";
import { validateFormData } from "../utils";

export const UPDATE_FORM_CONFIG = "UPDATE_FORM_CONFIG";
export const VALIDATE_FORM_CONFIG = "VALIDATE_FORM_CONFIG";
export const APPLY_FORM_CONFIG = "APPLY_FORM_CONFIG";

export const applyFormConfig = (payload: string): Action => ({
  type: APPLY_FORM_CONFIG,
  payload: JSON.parse(payload),
});

export const updateFormConfig = (payload: string): Action => ({
  type: UPDATE_FORM_CONFIG,
  payload,
});

export const validateFormConfig = (data: string): Action => ({
  type: VALIDATE_FORM_CONFIG,
  payload: validateFormData(data),
});
