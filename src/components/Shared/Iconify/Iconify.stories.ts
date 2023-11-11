import type { Meta, StoryObj } from "@storybook/react";
import Iconify from ".";

const meta: Meta<typeof Iconify> = {
  title: "Primitives/Iconify",
  component: Iconify,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: "eva:arrow-circle-up-fill",
  },
};
