import React, { useContext, FC } from "react";
import TabListContext from "./TabListContext";
import TabsContext from "./TabContext";

interface Props {
  children: React.ReactNode;
}

const Tab: FC<Props> = ({ children }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const { index } = useContext(TabListContext);
  const isActive = index === activeIndex;

  return (
    <div
      className={isActive ? "active" : ""}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </div>
  );
};

export default Tab;
