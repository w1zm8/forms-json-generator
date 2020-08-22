import { validateFormData } from "../utils";

describe("utils", () => {
  describe("validateFormData", () => {
    it("when json is invalid", () => {
      expect(validateFormData("")).toEqual(["Invalid JSON data"]);
    });
    it("when no field `items`", () => {
      expect(validateFormData('{ "controls": [] }')).toEqual([
        "Field 'items' is required",
      ]);
    });
    it("when no fields `items`, `controls`", () => {
      expect(validateFormData("{}")).toEqual([
        "Field 'items' is required",
        "Field 'controls' is required",
      ]);
    });
    it("when fields `items` is not an array", () => {
      expect(validateFormData('{ "items": "smth", "controls": [] }')).toEqual([
        "Field 'items' must be an array",
      ]);
    });
    it("when fields `items` and `controls` are not arrays", () => {
      expect(validateFormData('{ "items": "smth", "controls": 123 }')).toEqual([
        "Field 'items' must be an array",
        "Field 'controls' must be an array",
      ]);
    });
    it("when field `title` is not a string", () => {
      expect(
        validateFormData('{ "items": [], "controls": [], "title": [] }')
      ).toEqual(["Field 'title' must be a string"]);
    });
    it("data is valid", () => {
      expect(validateFormData('{ "items": [], "controls": [] }')).toBeNull();
    });
  });
});
