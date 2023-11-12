import type { Meta, StoryObj } from "@storybook/react";
import InputField from ".";

const metaInputField: Meta<typeof InputField> = {
  title: "Primitives/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
};

export default metaInputField;
type Story = StoryObj<typeof metaInputField>;

export const Default: Story = {
  args: {
    value: "Default input value",
  },
};
