import type { Meta, StoryObj } from "@storybook/react";
import HelperText from ".";

const metaHelperText: Meta<typeof HelperText> = {
  title: "FormComponents/HelperText",
  component: HelperText,
  parameters: {
    layout: "centered",
  },
};

export default metaHelperText;
type Story = StoryObj<typeof metaHelperText>;

export const Default: Story = {
  args: {
    helperText: "Default input value",
  },
};

export const Error: Story = {
  args: {
    helperText: "Default input value",
    error: true,
  },
};
