import React, { useContext, FC, ReactElement } from "react";
import TabsContext from "./TabContext";

interface Props {
  children: ReactElement | ReactElement[];
}

const TabContent: FC<Props> = ({ children }) => {
  const { activeIndex } = useContext(TabsContext);

  if (!Array.isArray(children)) {
    return <div>{children}</div>;
  }

  return <div>{children[activeIndex]}</div>;
};

export default TabContent;
