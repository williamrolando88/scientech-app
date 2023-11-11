import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import Iconify from "../Iconify";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
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
