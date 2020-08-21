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

export interface FormsConfigItem {
  label?: string;
  type: FieldType;
  props?: FieldTextAreaProps;
}

export interface FormsConfigControl {
  label: string;
  props: ButtonHTMLAttributes<HTMLButtonElement>;
}

export interface FormsConfigData {
  title?: string;
  items: FormsConfigItem[];
  controls: FormsConfigControl[];
}

export interface Action {
  type: string;
  payload?: any;
}
