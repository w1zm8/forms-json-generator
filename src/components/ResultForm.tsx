import React, { FC } from "react";
import FormItemsViewer from "./FormItemsViewer";
import FormControlsViewer from "./FormControlsViewer";
import { useFormConfig } from "../hooks/useFormConfig";

const ResultForm: FC<{}> = () => {
  const { state } = useFormConfig();

  if (!state.config) return null;

  const { title, items, controls } = state.config;

  return (
    <form>
      {title && <h1>{title}</h1>}
      <FormItemsViewer items={items} />
      <FormControlsViewer controls={controls} />
    </form>
  );
};

export default ResultForm;
