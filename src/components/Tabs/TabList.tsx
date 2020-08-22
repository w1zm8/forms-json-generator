import React, { FC, Children } from "react";
import TabListContext from "./TabListContext";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const TabList: FC<Props> = ({ children }) => {
  return (
    <div>
      {Children.map(children, (child, index: number) => (
        <TabListContext.Provider value={{ index }} key={index}>
          {child}
        </TabListContext.Provider>
      ))}
    </div>
  );
};

export default TabList;
