import type { Meta, StoryObj } from "@storybook/react";

import * as Socials from "../Socials/Socials.stories";
import * as Contact from "../Contact/Contact.stories";
import * as Newsletter from "../Newsletter/Newsletter.stories";

import Footer from "./Footer";
import { NewsletterProps } from "../Newsletter";
import { SocialProps } from "..";
import { ContactProps } from "../Contact";

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

export const WithContact: Story = {
  args: {
    contact: Contact.withTitle.args as ContactProps,
  },
};

export const WithSocials: Story = {
  args: {
    socials: Socials.WithTitle.args as SocialProps,
  },
};

export const WithNewletter: Story = {
  args: {
    newsletter: { ...Newsletter.Default.args } as NewsletterProps,
  },
};

export const CustomLinks: Story = {
  args: {
    customLinks: [
      { name: "test", path: "test" },
      { name: "other", path: "other" },
    ],
  },
};

export const Full: Story = {
  args: {
    ...WithContact.args,
    ...WithSocials.args,
    ...CustomLinks.args,
    ...WithNewletter.args,
  },
};
