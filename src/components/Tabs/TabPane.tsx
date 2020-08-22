import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const TabPane: FC<Props> = ({ children }) => <>{children}</>;

export default TabPane;
