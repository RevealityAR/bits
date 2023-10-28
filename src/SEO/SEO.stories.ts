import type { Meta, StoryObj } from "@storybook/react";

import SEO from "./SEO";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof SEO> = {
  title: "Example/SEO",
  component: SEO,
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
type Story = StoryObj<typeof SEO>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const FullMeta: Story = {
  args: {
    title: "Reveality",
    description: "Reveality is a creative studio.",
    image: "https://reveality.com/og-image.png",
    url: "https://reveality.com",
    article: true,
    author: "John Doe",
    langCode: "en",
    useRobotoFont: true,
    siteName: "Reveality",
    favicon: "https://reveality.com/favicon.ico",
    titleTemplate: "%s | Reveality",
  },
};
