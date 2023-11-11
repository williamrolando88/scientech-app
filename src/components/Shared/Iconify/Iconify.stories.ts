import type { Meta, StoryObj } from "@storybook/react";
import Iconify from ".";

const metaIconify: Meta<typeof Iconify> = {
  title: "Primitives/Iconify",
  component: Iconify,
  parameters: {
    layout: "centered",
  },
};

export default metaIconify;
type Story = StoryObj<typeof metaIconify>;

export const Primary: Story = {
  args: {
    icon: "eva:arrow-circle-up-fill",
  },
};
