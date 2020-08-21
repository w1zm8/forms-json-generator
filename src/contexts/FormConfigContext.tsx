import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReducerState,
} from "react";
import {
  FormConfigReducer,
  Action,
  FormConfigState,
} from "../reducers/formConfigReducer";

interface ContextValue {
  state: ReducerState<FormConfigReducer>;
  dispatch: Dispatch<Action>;
}

const FormConfigContext = createContext<ContextValue | undefined>(undefined);

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

export const useFormConfig = () =>
  useContext(FormConfigContext) as ContextValue;

export const useFormConfigData = () => {
  const { state } = useFormConfig();

  return state.data;
};
