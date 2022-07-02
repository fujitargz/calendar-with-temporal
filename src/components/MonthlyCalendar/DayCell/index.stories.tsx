import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DayCell } from "./DayCell";

export default {
  component: DayCell,
  argTypes: {
    date: {
      control: {
        type: "number",
        min: 1,
        max: 31,
      },
    },
    today: {
      control: {
        type: "boolean",
      },
    },
    currentMonth: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof DayCell>;

const Template: ComponentStory<typeof DayCell> = ({
  date,
  today,
  currentMonth,
}) => <DayCell date={date} today={today} currentMonth={currentMonth} />;

export const Default = Template.bind({});
Default.args = {
  date: 26,
  today: false,
  currentMonth: true,
};

export const Today = Template.bind({});
Today.args = {
  date: 26,
  today: true,
  currentMonth: true,
};

export const NotCurrentMonth = Template.bind({});
NotCurrentMonth.args = {
  date: 26,
  today: false,
  currentMonth: false,
};
