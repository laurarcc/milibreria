import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
  title: "ButtonCustomProps",
  component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
  args: {
    text: "Button primary",
    txtcolor: "white",
    bgcolor: "#ce2f5e",
    disabled: false,
    size: "small",
    onClick: () => alert("Button Primary"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Button secondary",
    txtcolor: "white",
    bgcolor: "#7b102f",
    disabled: false,
    size: "small",
    onClick: () => alert("Button secondary"),
  },
};
