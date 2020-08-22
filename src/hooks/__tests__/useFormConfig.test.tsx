import React, { ReactElement } from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useFormConfig } from "../useFormConfig";
import { FC } from "react";
import { FormConfigProvider } from "../../contexts/FormConfigContext";
import formConfigReducer, {
  initialState,
} from "../../reducers/formConfigReducer";
import { items, controls } from "../../__mocks__/formResultData";

const Wrapper: FC<{
  children: ReactElement;
}> = ({ children }) => (
  <FormConfigProvider
    initialState={{
      ...initialState,
      config: {
        title: "test",
        items: [items[0]],
        controls: [controls[0]],
      },
      error: null,
    }}
    reducer={formConfigReducer}
  >
    {children}
  </FormConfigProvider>
);

describe("useFormConfig", () => {
  it("returns state", () => {
    const { result } = renderHook(() => useFormConfig(), {
      wrapper: Wrapper,
    });

    expect(result.current.state.config!.title).toBe("test");
    expect(result.current.state.config!.items[0]).toBe(items[0]);
    expect(result.current.state.config!.controls[0]).toBe(controls[0]);
  });
});
