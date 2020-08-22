import { Reducer } from "react";
import { FormsConfigData, Action } from "../types";
import {
  UPDATE_FORM_CONFIG,
  VALIDATE_FORM_CONFIG,
  APPLY_FORM_CONFIG,
} from "../actions/formConfigActions";

export interface FormConfigState {
  data: string;
  config: FormsConfigData | null;
  error: string[] | null;
}

export type FormConfigReducer = Reducer<FormConfigState, Action>;

export const initialState: FormConfigState = {
  config: null,
  data: "",
  error: null,
};

const formConfigReducer: FormConfigReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_FORM_CONFIG:
      return { ...state, data: payload };
    case VALIDATE_FORM_CONFIG:
      return { ...state, error: payload };
    case APPLY_FORM_CONFIG:
      return { ...state, config: payload };
  }
  return state;
};

export default formConfigReducer;
