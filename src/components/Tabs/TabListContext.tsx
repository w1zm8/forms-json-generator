import { createContext } from "react";

interface Props {
  index: number;
}

const TabListContext = createContext<Props>({ index: 0 });

export default TabListContext;
