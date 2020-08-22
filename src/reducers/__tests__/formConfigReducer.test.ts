import formConfigReducer, { initialState } from "../formConfigReducer";
import {
  updateFormConfig,
  validateFormConfig,
  applyFormConfig,
} from "../../actions/formConfigActions";
import { FormsConfigData } from "../../types";
import { items, controls } from "../../__mocks__/formResultData";

const newFormConfig: FormsConfigData = {
  title: "Some Form",
  items: [items[0]],
  controls: [controls[0]],
};

const invalidJsonData = "{ smth, test }";

describe("formConfigReducer", () => {
  describe("dispatch `UPDATE_FORM_CONFIG`", () => {
    it("data was stored", () => {
      expect(
        formConfigReducer(
          initialState,
          updateFormConfig(JSON.stringify(newFormConfig))
        ).data
      ).toEqual(JSON.stringify(newFormConfig));
    });
  });
  describe("dispatch `VALIDATE_FORM_CONFIG`", () => {
    it("result of validation was stored", () => {
      expect(
        formConfigReducer(initialState, validateFormConfig(invalidJsonData))
          .error
      ).not.toBeNull();
    });
  });
  describe("dispatch `APPLY_FORM_CONFIG`", () => {
    it("configuration was stored", () => {
      expect(
        formConfigReducer(
          initialState,
          applyFormConfig(JSON.stringify(newFormConfig))
        ).config
      ).toEqual(newFormConfig);
    });
  });
});
