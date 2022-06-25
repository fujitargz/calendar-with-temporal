import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MonthlyCalendarView } from "./MonthlyCalendarView";

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
    <div style={{ width: "300px" }}>
      <MonthlyCalendarView year={year} month={month} />
    </div>
  );
};

export const monthlyCalendarView = Template.bind({});
monthlyCalendarView.args = {
  year: 2022,
  month: 6,
};
