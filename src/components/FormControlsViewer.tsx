import React, { FC } from "react";
import { FormsConfigControl } from "../types";
import Button from "./Button";

interface Props {
  controls: FormsConfigControl[];
}

const FormControlsViewer: FC<Props> = ({ controls }) => (
  <div>
    {controls.map(({ label, props }, index) => (
      <Button {...props} key={index}>
        {label}
      </Button>
    ))}
  </div>
);

export default FormControlsViewer;
