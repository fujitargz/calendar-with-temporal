import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MonthlyCalendar } from "./index";

export default {
  component: MonthlyCalendar,
} as ComponentMeta<typeof MonthlyCalendar>;

export const monthlyCalendar: ComponentStory<typeof MonthlyCalendar> = () => (
  <div style={{ width: "300px" }}>
    <MonthlyCalendar />
  </div>
);
