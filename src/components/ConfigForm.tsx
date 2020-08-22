import React, { FC } from "react";
import styled from "styled-components";
import TextArea from "./TextArea";
import Button from "./Button";
import { useFormConfig } from "../hooks/useFormConfig";
import {
  updateFormConfig,
  validateFormConfig,
  applyFormConfig,
} from "../actions/formConfigActions";
import Alert from "./Alert";

const ContentRight = styled.div`
  text-align: right;
`;

interface Props {
  onSubmit(): void;
}

const ConfigForm: FC<Props> = ({ onSubmit }) => {
  const { state, dispatch } = useFormConfig();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!state.error) {
      dispatch(applyFormConfig(state.data));
      onSubmit();
    }
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(validateFormConfig(target.value));
    dispatch(updateFormConfig(target.value));
  };

  return (
    <>
      {state.error && (
        <Alert data-testid="error">
          <ul>
            {state.error.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </Alert>
      )}
      <form data-testid="form-config" onSubmit={handleSubmit}>
        <TextArea
          name="data"
          data-testid="data"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              e.preventDefault();
            }
          }}
          rows={10}
          value={state.data}
        />
        <br />
        <ContentRight>
          <Button
            type="submit"
            disabled={!!state.error || !state.data.length}
            variant="primary"
          >
            Apply
          </Button>
        </ContentRight>
      </form>
    </>
  );
};

export default ConfigForm;
