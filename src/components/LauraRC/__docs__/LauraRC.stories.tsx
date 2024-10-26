import type { Meta, StoryObj } from "@storybook/react";
import LauraRCexample from "./LauraRCexample"; //importamos el componente favexample
const meta: Meta<typeof LauraRCexample> = {
    title: "LauraRCustom",
    component: LauraRCexample,
};
export default meta;
type Story = StoryObj<typeof LauraRCexample>;
export const Primary: Story = {
    args: {
        onClick: () => alert("Mi componente 1"),
        disabled: false,
        checked: true,
        defaultChecked: false,
        color: "primary",
        size: "small"
    },
};
export const Secondary: Story = {
    args: {
        onClick: () => alert("Mi componente 2"),
        disabled: false,
        checked: false,
        defaultChecked: true,
        color: "secondary",
        size: "medium"
    },
};
