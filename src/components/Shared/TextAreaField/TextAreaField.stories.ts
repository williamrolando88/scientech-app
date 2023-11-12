import type { Meta, StoryObj } from "@storybook/react";
import TextAreaField from ".";

const metaInputField: Meta<typeof TextAreaField> = {
  title: "Primitives/TextAreaField",
  component: TextAreaField,
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
