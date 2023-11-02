import type { Meta, StoryObj } from "@storybook/react";
import LanguageSwitcher from "./LanguageSwitcher";
import { userEvent, within } from "@storybook/testing-library";
import { useArgs } from "@storybook/preview-api";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof LanguageSwitcher> = {
  title: "Example/LanguageSwitcher",
  component: LanguageSwitcher,
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
type Story = StoryObj<typeof LanguageSwitcher>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    currentLanguage: "fr",
    languages: [
      { langCode: "fr", name: "FR" },
      { langCode: "en", name: "EN" },
    ],
  },
  render: (args) => {
    const [{ currentLanguage }, updateCurrentLanguage] = useArgs();

    function onChange(langCode: string) {
      updateCurrentLanguage({ currentLanguage: langCode });
    }

    return (
      <LanguageSwitcher
        {...args}
        onChange={onChange}
        currentLanguage={currentLanguage}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const enLink = canvas.getByRole("button", { name: "EN" });

    await userEvent.click(enLink);

    const frLink = canvas.getByRole("button", { name: "FR" });

    await userEvent.click(frLink);
  },
};
