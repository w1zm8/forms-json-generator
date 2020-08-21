import React, { FC } from "react";
import styled from "styled-components";
import LabelWrapper from "./LabelWrapper";

const TextAreaBlock = styled.div`
  label {
    display: inline-block;
  }
`;

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

const TextArea: FC<Props> = ({ label, id, ...props }) => (
  <TextAreaBlock>
    <LabelWrapper label={label} id={id}>
      <textarea id={id} {...props} />
    </LabelWrapper>
  </TextAreaBlock>
);

export default TextArea;
