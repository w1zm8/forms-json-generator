import { FIELD_TYPES } from "./constants";
import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";

export type FieldType = typeof FIELD_TYPES[number];

// just type aliases
export type InputProps = InputHTMLAttributes<HTMLInputElement>;
export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export type FieldTextAreaProps = InputProps | TextareaProps;

export interface FormsConfigurationItem {
  label?: string;
  type: FieldType;
  props?: FieldTextAreaProps;
}

export interface FormsConfigurationControl {
  label: string;
  count: number;
  props: ButtonHTMLAttributes<HTMLButtonElement>;
}

export interface FormsConfigurationData {
  title?: string;
  items: FormsConfigurationItem[];
  controls: FormsConfigurationControl[];
}
