import React, { FC, InputHTMLAttributes, FormEvent } from "react";
import styled from "styled-components";
import LabelWrapper from "./LabelWrapper";

const FieldBlock = styled.div`
  label {
    display: inline-block;
  }
`;

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  onChange?(e: FormEvent<HTMLInputElement>): void;
};

/*
actually we don't need that prop
but if we don't put any handler for checkbox input
we'll get warning: You provided a 'checked' prop to a form field w/o an `onChange` 
*/
const defaultOnChange = () => {};

const Field: FC<Props> = ({
  label,
  id,
  onChange = defaultOnChange,
  ...props
}) => (
  <FieldBlock>
    <LabelWrapper label={label} id={id}>
      <input id={id} {...props} onChange={onChange} />
    </LabelWrapper>
  </FieldBlock>
);

export default Field;
