import { Reducer } from "react";
import { FormsConfigData, Action } from "../types";
import {
  UPDATE_FORM_CONFIG,
  VALIDATE_FORM_CONFIG,
} from "../actions/formConfigActions";

export interface FormConfigState {
  data: FormsConfigData;
  error: string | null;
}

export type FormConfigReducer = Reducer<FormConfigState, Action>;

export const initialState: FormConfigState = {
  data: {
    title: "",
    items: [],
    controls: [],
  },
  error: null,
};

const formConfigReducer: FormConfigReducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_FORM_CONFIG:
      return { ...state, data: payload };
    case VALIDATE_FORM_CONFIG:
      return { ...state, error: payload };
  }
  return state;
};

export default formConfigReducer;
