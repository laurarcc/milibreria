//Laura Rodríguez Castellano 2ºDAM
import type { Meta, StoryObj } from "@storybook/react";
import favexample from "./favexample"; //importamos el componente favexample
const meta: Meta<typeof favexample> = {
  title: "FavCustom",
  component: favexample,
};
export default meta;
type Story = StoryObj<typeof favexample>;
export const Primary: Story = {
  args: {
    onClick: () => alert("FavouriteIcon Primary"),
    favcolor: "error",
    disabled:false
  },
};
export const Secondary: Story = {
  args: {
    onClick: () => alert("FavouriteIcon Secondary"),
    favcolor: "warning",
    disabled:false
  },
};
