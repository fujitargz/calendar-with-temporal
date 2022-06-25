import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeaderCell } from "./HeaderCell";

export default {
  component: HeaderCell,
} as ComponentMeta<typeof HeaderCell>;

export const Default: ComponentStory<typeof HeaderCell> = () => (
  <HeaderCell>Sun</HeaderCell>
);

export const Empty: ComponentStory<typeof HeaderCell> = () => <HeaderCell />;
