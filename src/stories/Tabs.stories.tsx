import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import "../index.css";

import Tabs, { TabList, Tab, TabContent, TabPane } from "../components/Tabs";
import Field from "../components/Field";
import Button from "../components/Button";
import Card from "../components/Card";
import TextArea from "../components/TextArea";

export default {
  title: "Example/Tabs",
  component: Tabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Row = styled.div`
  max-width: 400px;
  width: 100%;
`;

export const Primary = () => (
  <Row>
    <Card>
      <Tabs>
        <TabList>
          <Tab>Sign In</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabContent>
          <TabPane>
            <form>
              <Field
                label="Username"
                id="username"
                type="text"
                placeholder="Enter username"
              />
              <br />
              <Field
                label="Password"
                id="password"
                type="password"
                placeholder="Enter password"
              />
              <br />
              <Button type="submit" variant="primary">
                Sign In
              </Button>
            </form>
          </TabPane>
          <TabPane>
            <form>
              <Field
                label="Email"
                id="email"
                type="email"
                placeholder="Enter email"
              />
              <br />
              <Field
                label="Username"
                id="username"
                type="text"
                placeholder="Enter username"
              />
              <br />
              <TextArea
                id="about"
                label="About"
                placeholder="Enter information about you"
              ></TextArea>
              <br />
              <Field
                label="Password"
                id="password"
                type="password"
                placeholder="Enter password"
              />
              <br />
              <Field
                label="Repeat Password"
                id="repeatPassword"
                type="password"
                placeholder="Repeat password"
              />
              <br />
              <Button type="submit" variant="primary">
                Sign Up
              </Button>
            </form>
          </TabPane>
        </TabContent>
      </Tabs>
    </Card>
  </Row>
);
