import {
  validateFormConfig,
  VALIDATE_FORM_CONFIG,
  applyFormConfig,
  APPLY_FORM_CONFIG,
} from "../formConfigActions";
import * as utils from "../../utils";

const mockValidateFormData = jest.spyOn(utils, "validateFormData");
const mockJsonParse = jest.spyOn(JSON, "parse");

describe("formConfigActions", () => {
  describe("action `validateFormConfig`", () => {
    const action = validateFormConfig("");

    it("called helper `validateFormData`", () => {
      expect(mockValidateFormData).toHaveBeenCalledTimes(1);
      expect(mockValidateFormData).toHaveBeenCalledWith("");
      expect(mockValidateFormData).toReturnWith(["Invalid JSON data"]);
    });
    it("returns action type and payload", () => {
      expect(action).toEqual({
        type: VALIDATE_FORM_CONFIG,
        payload: ["Invalid JSON data"],
      });
    });
  });
  describe("action `applyFormConfig`", () => {
    const data = '{ "items": [], "controls": [] }';
    const dataObj = JSON.parse(data);
    mockJsonParse.mockClear();
    const action = applyFormConfig(data);

    it("called `JSON.parse`", () => {
      expect(mockJsonParse).toHaveBeenCalledTimes(1);
      expect(mockJsonParse).toHaveBeenCalledWith(data);
    });
    it("returns action type and payload", () => {
      expect(action).toEqual({
        type: APPLY_FORM_CONFIG,
        payload: dataObj,
      });
    });
  });
});
