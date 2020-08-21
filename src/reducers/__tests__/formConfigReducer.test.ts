import formConfigReducer, { initialState } from "../formConfigReducer";
import {
  updateFormConfig,
  validateFormConfig,
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
  it("dispatch `UPDATE_FORM_CONFIG`", () => {
    expect(
      formConfigReducer(
        initialState,
        updateFormConfig(JSON.stringify(newFormConfig))
      ).data
    ).toEqual(newFormConfig);
  });
  it("dispatch `VALIDATE_FORM_CONFIG`", () => {
    expect(
      formConfigReducer(initialState, validateFormConfig(invalidJsonData)).error
    ).not.toBeNull();
  });
});
