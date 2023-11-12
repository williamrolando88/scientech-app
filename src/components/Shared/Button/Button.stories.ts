import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import Iconify from "../Iconify";

const metaButton: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default metaButton;
type Story = StoryObj<typeof metaButton>;

export const Default: Story = {
  args: {
    children: "Test Button",
  },
};

export const WithIcons: Story = {
  args: {
    children: "Icons Button",
    icon: Iconify({ icon: "eva:arrow-circle-up-fill" }),
  },
};

export const LargeButton: Story = {
  args: {
    children: "Large Button",
    size: "large",
  },
};
