import React, { FC } from "react";
import FormItemsViewer from "./FormItemsViewer";
import FormControlsViewer from "./FormControlsViewer";
import { useFormConfigData } from "../hooks/useFormConfig";

const ResultForm: FC<{}> = () => {
  const { title, items, controls } = useFormConfigData();

  return (
    <form>
      {title && <h3>{title}</h3>}
      <FormItemsViewer items={items} />
      <FormControlsViewer controls={controls} />
    </form>
  );
};

export default ResultForm;
