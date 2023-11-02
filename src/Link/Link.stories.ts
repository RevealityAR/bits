import type { Meta, StoryObj } from "@storybook/react";
import Link from "./Link";
import { userEvent, within } from "@storybook/testing-library";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Link> = {
  title: "Example/Link",
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Link>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    href: "/",
    children: "Google",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const link = canvas.getByRole("link", { name: "Google" });

    await userEvent.click(link);
  },
};

export const External: Story = {
  args: {
    href: "https://google.com",
    children: "Google",
    target: "_blank",
  },
};

export const Mail: Story = {
  args: {
    href: "mailto:contact@google.com",
    children: "contact@google.com",
  },
};
