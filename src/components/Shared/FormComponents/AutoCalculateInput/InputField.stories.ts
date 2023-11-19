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
    onChange: (field: string, value: number) => console.log(field, value),
    name: "test",
  },
};
