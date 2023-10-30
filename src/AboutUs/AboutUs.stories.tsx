import type { Meta, StoryObj } from "@storybook/react";

import AboutUs from "./AboutUs";
import { ContactInfo, Punchline, PunchlineParagraph } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AboutUs> = {
  title: "Example/AboutUs",
  component: AboutUs,
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
type Story = StoryObj<typeof AboutUs>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <Punchline>Créons ensemble</Punchline>
        <PunchlineParagraph>
          <>
            Nous sommes une équipe d’artistes numériques, médiat.eur.ice.s et
            ingénieurs en mission pour débloquer le potentiel créatif de la
            Réalité Augmentée.
          </>
        </PunchlineParagraph>
        <PunchlineParagraph>
          <>
            Nous animons des <strong>ateliers</strong> (pour tous les âges), des{" "}
            <strong>formations</strong> (pour les plus grands) et{" "}
            <strong>co-produisons</strong> des expériences avec artistes et
            institutions.
          </>
        </PunchlineParagraph>

        <ContactInfo contactEmail="contact@reveality.io">
          Ça m'intéresse
        </ContactInfo>
      </>
    ),
  },
};
