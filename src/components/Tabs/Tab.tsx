import React, { useContext, FC } from "react";
import styled from "styled-components";
import TabListContext from "./TabListContext";
import TabsContext from "./TabContext";

const TabBlock = styled.div`
  padding: 0px 0px 10px 0px;
  margin: 0px 30px -1px 0px;
  cursor: pointer;

  &.active {
    color: #1890ff;
    border-bottom: 2px solid #1890ff;
    font-weight: 600;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Tab: FC<Props> = ({ children }) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const { index } = useContext(TabListContext);
  const isActive = index === activeIndex;

  return (
    <TabBlock
      className={isActive ? "active" : ""}
      onClick={() => setActiveIndex(index)}
    >
      {children}
    </TabBlock>
  );
};

export default Tab;
