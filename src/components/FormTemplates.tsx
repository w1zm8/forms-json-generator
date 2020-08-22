import React, { FC } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useFormConfig } from "../hooks/useFormConfig";
import { updateFormConfig } from "../actions/formConfigActions";
import { signInFormData, signUpFormData, createPostFormData } from "../data";

const Row = styled.div`
  margin-bottom: 15px;

  button {
    margin-left: 10px;
  }
`;

const FormTemplates: FC<{}> = () => {
  const { dispatch } = useFormConfig();

  return (
    <Row>
      Templates:{" "}
      <Button
        variant="success"
        size="small"
        onClick={() => dispatch(updateFormConfig(signInFormData))}
      >
        Sign In Form
      </Button>
      <Button
        variant="success"
        size="small"
        onClick={() => dispatch(updateFormConfig(signUpFormData))}
      >
        Sign Up Form
      </Button>
      <Button
        variant="success"
        size="small"
        onClick={() => dispatch(updateFormConfig(createPostFormData))}
      >
        Create Post Form
      </Button>
    </Row>
  );
};

export default FormTemplates;
