import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Navbar> = {
  title: "Example/Navbar",
  component: Navbar,
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
type Story = StoryObj<typeof Navbar>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    pages: [
      { path: "/about", name: "about" },
      { path: "/something", name: "something" },
    ],
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <HomeIcon />,
  },
};

export const WithLanguageSwitcher: Story = {
  args: {
    ...Default.args,
    languageSwitcher: {
      currentLanguage: "fr",
      languages: [
        { langCode: "fr", name: "FR" },
        { langCode: "en", name: "EN" },
      ],
      onChange: () => {},
    },
  },
};

export const WithIconAndLanguageSwitcher: Story = {
  args: {
    ...WithIcon.args,
    ...WithLanguageSwitcher.args,
  },
};
