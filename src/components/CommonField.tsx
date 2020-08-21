import React, { FC } from "react";
import {
  FieldType,
  FieldTextAreaProps,
  InputProps,
  TextareaProps,
} from "../types";
import Field from "./Field";
import TextArea from "./TextArea";
import { FIELD_TYPE_TEXT, FIELD_INPUT_TYPES } from "../constants";
import { getInputType } from "../helpers";

type Props = {
  type: FieldType;
  label?: string;
  tagProps?: FieldTextAreaProps;
};

const CommonField: FC<Props> = ({ type, label, tagProps = {} }) => {
  if (FIELD_INPUT_TYPES.includes(type)) {
    const inputType = getInputType(type);
    return (
      <Field type={inputType} label={label} {...(tagProps as InputProps)} />
    );
  } else if (type === FIELD_TYPE_TEXT) {
    return <TextArea label={label} {...(tagProps as TextareaProps)} />;
  }

  return null;
};

export default CommonField;
