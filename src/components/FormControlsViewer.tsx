import React, { FC } from "react";
import { FormsConfigControl } from "../types";

interface Props {
  controls: FormsConfigControl[];
}

const FormControlsViewer: FC<Props> = ({ controls }) => (
  <div>
    {controls.map(({ label, props }, index) => (
      <button {...props} key={index}>
        {label}
      </button>
    ))}
  </div>
);

export default FormControlsViewer;
