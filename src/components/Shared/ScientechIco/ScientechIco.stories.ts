import type { Meta, StoryObj } from "@storybook/react";
import ScientechIco from ".";

const metaScientechIco: Meta<typeof ScientechIco> = {
  title: "Primitives/ScientechIco",
  component: ScientechIco,
  parameters: {
    layout: "centered",
  },
};

export default metaScientechIco;
type Story = StoryObj<typeof metaScientechIco>;

export const Primary: Story = {
  args: {},
};
