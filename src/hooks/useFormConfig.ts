import { useContext } from "react";
import { FormConfigContext, ContextValue } from "../contexts/FormConfigContext";

export const useFormConfig = () =>
  useContext(FormConfigContext) as ContextValue;

export const useFormConfigData = () => {
  const { state } = useFormConfig();

  return state.data;
};
