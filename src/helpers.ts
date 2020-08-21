import { FieldType } from "./types";
import {
  FIELD_TYPE_STRING,
  FIELD_TYPE_NUMBER,
  FIELD_TYPE_BOOLEAN,
  FIELD_TYPE_RADIO,
  FIELD_TYPE_DATE,
} from "./constants";

export const getInputType = (type: FieldType): string => {
  switch (type) {
    case FIELD_TYPE_STRING:
      return "text";
    case FIELD_TYPE_NUMBER:
      return "number";
    case FIELD_TYPE_BOOLEAN:
      return "checkbox";
    case FIELD_TYPE_RADIO:
      return "radio";
    case FIELD_TYPE_DATE:
      return "date";
    default:
      return "text";
  }
};
