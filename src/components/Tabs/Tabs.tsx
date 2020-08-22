import React, { useState, FC } from "react";
import TabsContext from "./TabContext";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  activeIndex?: number;
  onSetActiveIndex?(index: number): void;
}

const Tabs: FC<Props> = ({
  children,
  activeIndex: controlledActiveIndex,
  onSetActiveIndex,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabsContext.Provider
      value={{
        activeIndex: controlledActiveIndex ?? activeIndex,
        setActiveIndex: onSetActiveIndex ?? setActiveIndex,
      }}
    >
      <>{children}</>
    </TabsContext.Provider>
  );
};

export default Tabs;
