import type { Meta, StoryObj } from "@storybook/react";
import PageLayout from "./PageLayout";

import * as Navbar from "../Navbar/Navbar.stories";
import * as Footer from "../Footer/Footer.stories";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof PageLayout> = {
  title: "Example/PageLayout",
  component: PageLayout,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-PageLayout
    PageLayout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    navbar: Navbar.Default.args,
    footer: Footer.Default.args,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const Reveality: Story = {
  args: {
    ...Default.args,
    navbar: Navbar.WithIconAndLanguageSwitcher.args,
    footer: Footer.Full.args,
  },
};
