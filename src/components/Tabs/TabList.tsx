import React, { FC, Children } from "react";
import styled from "styled-components";
import TabListContext from "./TabListContext";

const TabListBlock = styled.div`
  display: flex;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 15px;
`;

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const TabList: FC<Props> = ({ children }) => {
  return (
    <TabListBlock>
      {Children.map(children, (child, index: number) => (
        <TabListContext.Provider value={{ index }} key={index}>
          {child}
        </TabListContext.Provider>
      ))}
    </TabListBlock>
  );
};

export default TabList;
