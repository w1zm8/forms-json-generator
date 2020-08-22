import React, { FC } from "react";
import { FormsConfigItem } from "../types";
import CommonField from "./CommonField";

interface Props {
  items: FormsConfigItem[];
}

const FormItemsViewer: FC<Props> = ({ items }) => (
  <>
    {items.map(({ props, ...item }, index) => (
      <React.Fragment key={index}>
        <CommonField {...item} tagProps={props} />
        <br />
      </React.Fragment>
    ))}
  </>
);

export default FormItemsViewer;
