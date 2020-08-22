import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Tabs from "../Tabs";
import TabList from "../TabList";
import Tab from "../Tab";
import TabContent from "../TabContent";
import TabPane from "../TabPane";

const firstTabTitle = "First Tab";
const secondTabTitle = "Second Tab";

const firstTabContent = "First Tab Content";
const secondTabContent = "Second Tab Content";

describe("Tabs", () => {
  it("renders", () => {
    const { getByText, queryByText, rerender } = render(
      <Tabs>
        <TabList>
          <Tab>{firstTabTitle}</Tab>
        </TabList>
        <TabContent>
          <TabPane>{firstTabContent}</TabPane>
        </TabContent>
      </Tabs>
    );

    expect(getByText(firstTabTitle)).toBeInTheDocument();
    expect(getByText(firstTabContent)).toBeInTheDocument();

    rerender(
      <Tabs>
        <TabList>
          <Tab>{firstTabTitle}</Tab>
          <Tab>{secondTabTitle}</Tab>
        </TabList>
        <TabContent>
          <TabPane>{firstTabContent}</TabPane>
          <TabPane>{secondTabContent}</TabPane>
        </TabContent>
      </Tabs>
    );

    const firstTab = getByText(firstTabTitle);
    const secondTab = getByText(secondTabTitle);

    expect(firstTab).toBeInTheDocument();
    expect(firstTab.classList.contains("active")).toBe(true);
    expect(secondTab).toBeInTheDocument();
    expect(getByText(firstTabContent)).toBeInTheDocument();
    expect(queryByText(secondTabContent)).not.toBeInTheDocument();

    userEvent.click(secondTab);

    expect(secondTab.classList.contains("active")).toBe(true);
    expect(getByText(secondTabContent)).toBeInTheDocument();
  });
});
