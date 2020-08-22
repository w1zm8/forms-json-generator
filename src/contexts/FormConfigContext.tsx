import React, {
  createContext,
  useReducer,
  Dispatch,
  ReducerState,
} from "react";
import {
  FormConfigReducer,
  FormConfigState,
} from "../reducers/formConfigReducer";
import { Action } from "../types";

export interface ContextValue {
  state: ReducerState<FormConfigReducer>;
  dispatch: Dispatch<Action>;
}

export const FormConfigContext = createContext<ContextValue | undefined>(
  undefined
);

interface Props {
  reducer: FormConfigReducer;
  initialState: FormConfigState;
  children: React.ReactChildren;
}

export const FormConfigProvider = ({
  reducer,
  initialState,
  children,
}: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormConfigContext.Provider
      value={{ state, dispatch }}
      children={children}
    />
  );
};
