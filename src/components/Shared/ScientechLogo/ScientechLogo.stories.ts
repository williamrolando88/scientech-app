import type { Meta, StoryObj } from "@storybook/react";
import ScientechLogo from ".";

const metaScientechLogo: Meta<typeof ScientechLogo> = {
  title: "Primitives/ScientechLogo",
  component: ScientechLogo,
  parameters: {
    layout: "centered",
  },
};

export default metaScientechLogo;
type Story = StoryObj<typeof metaScientechLogo>;

export const Primary: Story = {
  args: {
    variant: "blue",
  },
};
