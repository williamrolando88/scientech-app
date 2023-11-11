import type { Meta, StoryObj } from "@storybook/react";
import ScientechLogo from ".";

const meta: Meta<typeof ScientechLogo> = {
  title: "Primitives/ScientechLogo",
  component: ScientechLogo,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "blue",
  },
};
