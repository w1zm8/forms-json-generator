import React, { useState, FC } from "react";
import TabsContext from "./TabContext";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const Tabs: FC<Props> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;
