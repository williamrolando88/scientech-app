import type { Meta, StoryObj } from "@storybook/react";
import TextAreaField from ".";

const metaTextAreaField: Meta<typeof TextAreaField> = {
  title: "FormComponents/TextAreaField",
  component: TextAreaField,
  parameters: {
    layout: "centered",
  },
};

export default metaTextAreaField;
type Story = StoryObj<typeof metaTextAreaField>;

export const Default: Story = {
  args: {
    value: "Default input value",
  },
};
