import type { Meta, StoryObj } from "@storybook/react";
import InputField from ".";
import Iconify from "../../Iconify";

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

export const WithIcons: Story = {
  args: {
    value: "Default input value",
    icon: Iconify({ icon: "eva:arrow-circle-up-fill" }),
  },
};
