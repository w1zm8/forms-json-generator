import React, { FC } from "react";
import Label from "./Label";

interface Props {
  label?: string;
  id?: string;
  children: React.ReactElement;
}

const LabelWrapper: FC<Props> = ({ label, id, children }) => (
  <>
    {label && <Label htmlFor={id}>{label}</Label>}
    {children}
  </>
);

export default LabelWrapper;
