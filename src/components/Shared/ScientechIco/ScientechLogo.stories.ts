import type { Meta, StoryObj } from "@storybook/react";
import ScientechIco from ".";

const meta: Meta<typeof ScientechIco> = {
  title: "Primitives/ScientechIco",
  component: ScientechIco,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
