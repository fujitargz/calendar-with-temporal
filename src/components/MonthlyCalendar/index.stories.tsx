import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MonthlyCalendar } from "./index";

export default {
  component: MonthlyCalendar,
  argTypes: {
    initialYear: {
      control: {
        type: "number",
      },
    },
    initialMonth: {
      control: {
        type: "number",
        min: 1,
        max: 12,
      },
    },
  },
} as ComponentMeta<typeof MonthlyCalendar>;

const Template: ComponentStory<typeof MonthlyCalendar> = ({
  initialYear,
  initialMonth,
}) => {
  return (
    <div style={{ width: "300px" }}>
      <MonthlyCalendar initialYear={initialYear} initialMonth={initialMonth} />
    </div>
  );
};

export const monthlyCalendar = Template.bind({});
monthlyCalendar.args = {
  initialYear: 2022,
  initialMonth: 6,
};
