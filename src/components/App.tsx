import React, { FC, useState } from "react";
import styled from "styled-components";
import Tabs, { Tab, TabPane, TabList, TabContent } from "./Tabs";
import Card from "./Card";
import ConfigForm from "./ConfigForm";
import ResultForm from "./ResultForm";
import FormTemplates from "./FormTemplates";

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 25px auto 0 auto;
`;

const App: FC<{}> = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <Card>
        <FormTemplates />
        <Tabs
          activeIndex={activeTab}
          onSetActiveIndex={(index: number) => setActiveTab(index)}
        >
          <TabList>
            <Tab>Config</Tab>
            <Tab>Result</Tab>
          </TabList>
          <TabContent>
            <TabPane>
              <ConfigForm onSubmit={() => setActiveTab(1)} />
            </TabPane>
            <TabPane>
              <ResultForm />
            </TabPane>
          </TabContent>
        </Tabs>
      </Card>
    </Container>
  );
};

export default App;
