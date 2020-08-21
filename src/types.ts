import { FIELD_TYPES } from "./constants";

export type CommonFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export type FieldTypes = typeof FIELD_TYPES[number];
