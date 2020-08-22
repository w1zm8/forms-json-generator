import React, { FC, InputHTMLAttributes, FormEvent } from "react";
import styled from "styled-components";
import LabelWrapper from "./LabelWrapper";

const FieldBlock = styled.div`
  input[type="date"] {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  }

  input:not([type="checkbox"]):not([type="radio"]) {
    border-radius: 6px;
    width: calc(100% - 32px);
    padding: 0px 16px;
    font-size: 15px;
    height: 34px;
    line-height: 36px;
    outline: 0;
    border: 1px solid #dadada;
    color: #212529;
    display: block;

    &[type="number"] {
      width: calc(100% - 16px);
      padding: 0px 0px 0px 16px;
    }
  }

  label {
    display: inline-block;
    font-size: 15px;
    margin-left: 5px;
  }
`;

interface OwnProps {
  label?: string;
  onChange?(e: FormEvent<HTMLInputElement>): void;
}

export type Props = InputHTMLAttributes<HTMLInputElement> & OwnProps;

/*
  actually we don't need that prop
  but if we don't put any handler for checkbox input
  we'll get warning: You provided a 'checked' prop to a form field w/o an `onChange` 
*/
const defaultOnChange = () => {};

const Field: FC<Props> = ({
  label,
  id,
  type,
  onChange = defaultOnChange,
  ...props
}) => (
  <FieldBlock>
    <LabelWrapper
      label={label}
      id={id}
      position={type === "checkbox" || type === "radio" ? "after" : "before"}
    >
      <input {...props} id={id} type={type} onChange={onChange} />
    </LabelWrapper>
  </FieldBlock>
);

export default Field;
