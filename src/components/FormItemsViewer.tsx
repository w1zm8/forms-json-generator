import React, { FC } from "react";
import { FormsConfigurationItem, FieldType } from "../types";
import CommonField from "./CommonField";

interface Props {
  items: FormsConfigurationItem[];
}

const FormItemsViewer: FC<Props> = ({ items }) => {
  return (
    <>
      {items.map(({ props, ...item }, index) => (
        <CommonField {...item} tagProps={props} key={index} />
      ))}
    </>
  );
};

export default FormItemsViewer;
