import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DayCell } from "./DayCell";

export default {
  component: DayCell,
} as ComponentMeta<typeof DayCell>;

export const dayCell: ComponentStory<typeof DayCell> = () => (
  <DayCell>1</DayCell>
);
