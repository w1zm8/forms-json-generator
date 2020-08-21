import { getInputType } from "../helpers";
import {
  FIELD_TYPE_STRING,
  FIELD_TYPE_NUMBER,
  FIELD_TYPE_BOOLEAN,
  FIELD_TYPE_RADIO,
  FIELD_TYPE_DATE,
} from "../constants";

describe("helpers", () => {
  it("`getInputType` returns correct type", () => {
    expect(getInputType(FIELD_TYPE_STRING)).toBe("text");
    expect(getInputType(FIELD_TYPE_NUMBER)).toBe("number");
    expect(getInputType(FIELD_TYPE_BOOLEAN)).toBe("checkbox");
    expect(getInputType(FIELD_TYPE_RADIO)).toBe("radio");
    expect(getInputType(FIELD_TYPE_DATE)).toBe("date");
  });
});
