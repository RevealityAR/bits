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
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    //@ts-expect-error
    config.module.rules[2].exclude = [
      /node_modules\/(?!(gatsby|gatsby-script)\/)/,
    ];
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    //@ts-expect-error
    config.module.rules[2].use[0].options.plugins.push([
      require.resolve("babel-plugin-remove-graphql-queries"),
    ]);
    //@ts-expect-error
    config.resolve.mainFields = ["browser", "module", "main"];
    return config;
  },
};
export default config;
