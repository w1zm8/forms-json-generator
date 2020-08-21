import { Reducer } from "react";
import { FormsConfigData } from "../types";

export interface FormConfigState {
  data: FormsConfigData;
}

export interface Action {
  type: string;
  payload?: unknown;
}

export type FormConfigReducer = Reducer<FormConfigState, Action>;

export const initialState: FormConfigState = {
  data: {
    title: "",
    items: [],
    controls: [],
  },
};

const formConfigReducer: FormConfigReducer = (state, action) => {
  return state;
};

export default formConfigReducer;
