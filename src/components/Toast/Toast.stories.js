import React from "react";
import Toast from "./Toast";
import App from "../../App";

export default {
  title: "Toast",
  component: Toast,
  argTypes: {
    hideInfoIcon: {
      control: "boolean",
    },
    notificationIcon: {
      control: {
        type: "select",
      },
      options: ["information", "error", "warning", "success"],
    },
  },
};

const Template = (args) => (
  <App {...args}>
    <Toast {...args} />
  </App>
);

export const Default = Template.bind({});
Default.args = {
  message: "Message here",
  notificationIcon: "information",
};

export const DisplayType = Template.bind({});

DisplayType.args = {
  message: "Message here",
  hideInfoIcon: true,
  withoutAction: true,
  withoutDivider: true,
  crossIcon: true,
  notificationIcon: "information",
};

export const StatusType = Template.bind({});
StatusType.args = {
  message: "Message here",
  notificationIcon: "error",
};
StatusType.argTypes = {
  message: { control: "text" },
  notificationIcon: {
    control: {
      type: "select",
      options: ["information", "error", "warning", "success"],
    },
  },
  hideInfoIcon: { table: { disable: true } },
};

DisplayType.argTypes = {
  notificationIcon: { table: { disable: true } },
};
