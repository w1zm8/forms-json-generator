import React, { FC, TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import LabelWrapper from "./LabelWrapper";

const TextAreaBlock = styled.div`
  textarea {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
    border-radius: 6px;
    padding: 7px 13px;
    font-size: 15px;
    outline: 0;
    border: 1px solid #dadada;
    color: #212529;
    display: block;
    line-height: 1.5;
    width: calc(100% - 26px);
    height: auto;
  }

  label {
    display: inline-block;
    font-size: 15px;
    margin-left: 5px;
  }
`;

interface OwnProps {
  label?: string;
}

export type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & OwnProps;

const TextArea: FC<Props> = ({ label, id, ...props }) => (
  <TextAreaBlock>
    <LabelWrapper label={label} id={id}>
      <textarea id={id} {...props} />
    </LabelWrapper>
  </TextAreaBlock>
);

export default TextArea;
