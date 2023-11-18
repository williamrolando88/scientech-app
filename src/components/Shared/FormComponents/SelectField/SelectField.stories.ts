import type { Meta, StoryObj } from "@storybook/react";
import SelectField from ".";

const metaSelectField: Meta<typeof SelectField> = {
  title: "FormComponents/SelectField",
  component: SelectField,
  parameters: {
    layout: "centered",
  },
};

export default metaSelectField;
type Story = StoryObj<typeof metaSelectField>;

export const Default: Story = {
  args: {
    options: [
      { label: "Option1", value: "option1" },
      { label: "Option2", value: "option2" },
      { label: "Option3", value: "option3" },
    ],
  },
};
