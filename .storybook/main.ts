import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async webpackFinal(config) {
    //@ts-expect-error
    config.module.rules[2].use[0].options.presets[0][1] = {
      runtime: "automatic",
      importSource: "@emotion/react",
    };
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    //@ts-expect-error
    config.module.rules[2].exclude = [
      /node_modules\/(?!(gatsby|gatsby-script)\/)/,
    ];
    //@ts-expect-error
    config.resolve.mainFields = ["browser", "module", "main"];
    return config;
  },
};
export default config;
