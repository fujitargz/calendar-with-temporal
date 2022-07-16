import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Event } from "./Event";

export default {
  component: Event,
  argTypes: {
    title: {
      control: {
        type: "string",
      },
    },
  },
} as ComponentMeta<typeof Event>;

const Template: ComponentStory<typeof Event> = ({ title }) => (
  <Event title={title} />
);

export const event = Template.bind({});
event.args = {
  title: "イベント",
};
