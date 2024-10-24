import type { Meta, StoryObj } from "@storybook/react";
import FavExampleBorder from "./FavBorderexample"; //importamos el componente favexample
const meta: Meta<typeof FavExampleBorder> = {
    title: "FavBorderCustom",
    component: FavExampleBorder,
};
export default meta;
type Story = StoryObj<typeof FavExampleBorder>;
export const Primary: Story = {
    args: {
        onClick: () => alert("FavouriteIconBorder Primary"),
        favcolor: "error",
        disabled:false

    },
};
export const Secondary: Story = {
    args: {
        onClick: () => alert("FavouriteIconBorder Secondary"),
        favcolor: "warning",
        disabled:false
    },
};
