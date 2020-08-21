import React, { FC } from "react";
import styled from "styled-components";
import Label from "./Label";
import { CommonFieldProps } from "../types";

const FieldBlock = styled.div`
  label {
    display: inline-block;
  }
`;

const TextField: FC<CommonFieldProps> = ({ label, id, ...props }) => {
  return (
    <FieldBlock>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input id={id} {...props} />
    </FieldBlock>
  );
};

export default TextField;
