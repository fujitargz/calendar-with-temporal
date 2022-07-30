import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MonthlyCalendarView } from "./MonthlyCalendarView";

import { Event } from "types";

export default {
  component: MonthlyCalendarView,
  argTypes: {
    year: {
      control: {
        type: "number",
      },
    },
    month: {
      control: {
        type: "number",
        min: 1,
        max: 12,
      },
    },
  },
} as ComponentMeta<typeof MonthlyCalendarView>;

const Template: ComponentStory<typeof MonthlyCalendarView> = ({
  year,
  month,
}) => {
  return (
    <div style={{ width: "800px" }}>
      <MonthlyCalendarView year={year} month={month} events={events} />
    </div>
  );
};

export const monthlyCalendarView = Template.bind({});
monthlyCalendarView.args = {
  year: 2022,
  month: 6,
};

const events: Event[] = [
  {
    id: 1,
    start: {
      year: 2022,
      month: 6,
      day: 1,
    },
    end: {
      year: 2022,
      month: 6,
      day: 1,
    },
    title: "test event 1",
  },
  {
    id: 2,
    start: {
      year: 2022,
      month: 6,
      day: 3,
    },
    end: {
      year: 2022,
      month: 6,
      day: 5,
    },
    title: "test event 2",
  },
];
