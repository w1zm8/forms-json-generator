import React, { useState, FC } from "react";
import styled from "styled-components";
import TabsContext from "./TabContext";

const TabsBlock = styled.div`
  //border: 1px solid #e5e5e5;
  //border-radius: 6px;
  //padding: 15px;
`;

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const Tabs: FC<Props> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <TabsBlock>{children}</TabsBlock>
    </TabsContext.Provider>
  );
};

export default Tabs;
