import React, { FC } from "react";
import { FormsConfigControl } from "../types";
import Button from "./Button";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 10px;
  }
`;

interface Props {
  controls: FormsConfigControl[];
}

const FormControlsViewer: FC<Props> = ({ controls }) => (
  <Row>
    {controls.map(({ label, props = {} }, index) => (
      <React.Fragment key={index}>
        <Button {...props} key={index}>
          {label}
        </Button>
        <br />
      </React.Fragment>
    ))}
  </Row>
);

export default FormControlsViewer;
