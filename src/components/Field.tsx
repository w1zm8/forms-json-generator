import React, { FC } from "react";
import styled from "styled-components";
import LabelWrapper from "./LabelWrapper";

const FieldBlock = styled.div`
  label {
    display: inline-block;
  }
`;

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Field: FC<Props> = ({ label, id, ...props }) => (
  <FieldBlock>
    <LabelWrapper label={label} id={id}>
      <input id={id} {...props} />
    </LabelWrapper>
  </FieldBlock>
);

export default Field;
