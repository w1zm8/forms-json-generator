import React, { FC } from "react";
import Label from "./Label";
import { CommonFieldProps } from "../types";

const Checkbox: FC<CommonFieldProps> = ({ label, id, ...props }) => {
  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input type="checkbox" id={id} {...props} />
    </div>
  );
};

export default Checkbox;
