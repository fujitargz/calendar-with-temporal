import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { App } from "./App";

export default {
  component: App,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof App>;

export const Default: ComponentStory<typeof App> = () => <App />;

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const anker = await canvas.getByText("Learn React");
  await userEvent.click(anker);
};
