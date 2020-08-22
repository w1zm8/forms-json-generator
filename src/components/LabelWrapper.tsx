import React, { FC } from "react";
import Label from "./Label";

type LabelPosition = "before" | "after";

interface Props {
  label?: string;
  id?: string;
  children: React.ReactElement;
  position?: LabelPosition;
}

const LabelWrapper: FC<Props> = ({
  label,
  id,
  children,
  position = "before",
}) => (
  <>
    {label && position === "before" && <Label htmlFor={id}>{label}</Label>}
    {children}
    {label && position === "after" && <Label htmlFor={id}>{label}</Label>}
  </>
);

export default LabelWrapper;
