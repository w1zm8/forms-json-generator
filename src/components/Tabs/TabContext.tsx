import { createContext } from "react";

interface Props {
  activeIndex: number;
  setActiveIndex(index: number): void;
}

const TabsContext = createContext<Props>({
  activeIndex: 0,
  setActiveIndex: () => {},
});

export default TabsContext;
