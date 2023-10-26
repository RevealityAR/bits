import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import Footer from "./Footer";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Footer> = {
  title: "Example/Footer",
  component: Footer,
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
type Story = StoryObj<typeof Footer>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const Author: Story = {
  args: {
    author: "John Doe",
    authorMail: "john.doe@reveality.com",
  },
};

export const Socials: Story = {
  args: {
    github: "reveality",
    facebook: "reveality",
    twitter: "reveality",
    instagram: "reveality",
    vimeo: "reveality",
    soundcloud: "reveality",
    youtube: "reveality",
  },
};

export const CustomLinks: Story = {
  args: {
    customLinks: [{ name: "test", path: "test" }],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const link = canvas.getByRole("link", { name: "test" });

    await userEvent.click(link);
  },
};