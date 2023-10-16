import React from "react";
import { StringList } from "../../src/types";
import { CSSObject } from "@emotion/react";

const boldCSS: CSSObject = {
  color: "#2771cc",
};
const boldLightCSS: CSSObject = {
  color: "#649DE5",
};

export const strings: StringList = {
  punchline: {
    ["en"]: (
      <>
        Tell your stories with <strong css={boldCSS}>Augmented Reality</strong>
      </>
    ),
    ["fr"]: (
      <>
        Racontez vos histoires en{" "}
        <strong css={boldCSS}>Réalité Augmentée</strong>
      </>
    ),
  },
  subline: {
    ["en"]: (
      <>
        Reveality is a toolkit for artists and cultural institutions looking to
        craft <strong css={boldCSS}>creative</strong> and{" "}
        <strong css={boldCSS}>engaging</strong> experiences.
      </>
    ),
    ["fr"]: (
      <>
        Reveality est une boite à outils à destination des artistes et
        institutions culturelles qui veulent créer des expériences{" "}
        <strong css={boldCSS}>créatives</strong> et{" "}
        <strong css={boldCSS}>captivantes</strong>.
      </>
    ),
  },
  downloadApp: {
    ["en"]: `App available now`,
    ["fr"]: `Appli disponible aujourd'hui`,
  },
  aProject: {
    ["en"]: `A project in mind?`,
    ["fr"]: `Une idée en tête ?`,
  },
  reachUs: {
    ["en"]: `Let's talk about it`,
    ["fr"]: `Parlons-en`,
  },
};
