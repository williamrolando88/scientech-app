import type { Meta, StoryObj } from "@storybook/react";
import AutoCalculateInput from ".";

const metaAutoCalculateInput: Meta<typeof AutoCalculateInput> = {
  title: "FormComponents/AutoCalculateInput",
  component: AutoCalculateInput,
  parameters: {
    layout: "centered",
  },
};

export default metaAutoCalculateInput;
type Story = StoryObj<typeof metaAutoCalculateInput>;

export const Default: Story = {
  args: {
    onCalculationDone: (field: string, value: number) =>
      alert(`field, value: ${field}, ${value}`),
    name: "test",
  },
};
