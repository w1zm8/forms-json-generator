import React, { FC } from "react";
import styled from "styled-components";
import Label from "./Label";

const TextAreaBlock = styled.div`
  label {
    display: inline-block;
  }
`;

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

const TextArea: FC<Props> = ({ label, id, ...props }) => {
  return (
    <TextAreaBlock>
      {label && <Label htmlFor={id}>{label}</Label>}
      <textarea id={id} {...props} />
    </TextAreaBlock>
  );
};

export default TextArea;
