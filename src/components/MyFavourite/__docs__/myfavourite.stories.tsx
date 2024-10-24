import type { Meta, StoryObj } from "@storybook/react";
import favexample from "./favexample"; //importamos el componente Example
const meta: Meta<typeof favexample> = {
  title: "FavCustom",
  component: favexample,
};
export default meta;
type Story = StoryObj<typeof favexample>;
export const Primary: Story = {
  args: {
    onClick: () => alert("Button Primary"),
    favcolor: "info",
  },
};
export const Secondary: Story = {
  args: {
    onClick: () => alert("Button Primary"),
    favcolor: "info",
  },
};
