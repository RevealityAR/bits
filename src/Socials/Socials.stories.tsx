import type { Meta, StoryObj } from "@storybook/react";
import GithubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

import Socials from "./Socials";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Socials> = {
  title: "Example/Socials",
  component: Socials,
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
type Story = StoryObj<typeof Socials>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    socials: [
      { title: "github", url: "github", icon: <GithubIcon /> },
      { title: "facebook", url: "Facebook", icon: <FacebookIcon /> },
    ],
  },
};

export const WithTitle: Story = {
  args: {
    ...Default.args,
    title: "Follow us on social media",
  },
};
