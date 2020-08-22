import React, { FC } from "react";
import TextArea from "./TextArea";
import Button from "./Button";
import { useFormConfig } from "../hooks/useFormConfig";
import {
  updateFormConfig,
  validateFormConfig,
} from "../actions/formConfigActions";
import Alert from "./Alert";

const ConfigForm: FC<{}> = () => {
  const { state, dispatch } = useFormConfig();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const [data] = target.elements as any;

    dispatch(updateFormConfig(data.value));
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(validateFormConfig(target.value));

  return (
    <>
      {state.error && <Alert data-testid="error">{state.error}</Alert>}
      <form data-testid="form-config" onSubmit={handleSubmit}>
        <TextArea name="data" data-testid="data" onChange={handleChange} />
        <Button type="submit" disabled={!!state.error}>
          Apply
        </Button>
      </form>
    </>
  );
};

export default ConfigForm;
