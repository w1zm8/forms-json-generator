import React, { FC } from "react";
import { FormsConfigItem } from "../types";
import CommonField from "./CommonField";

interface Props {
  items: FormsConfigItem[];
}

const FormItemsViewer: FC<Props> = ({ items }) => (
  <div>
    {items.map(({ props, ...item }, index) => (
      <CommonField {...item} tagProps={props} key={index} />
    ))}
  </div>
);

export default FormItemsViewer;
