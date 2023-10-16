import { CSSObject } from "@emotion/react";
import { breakpointKey, basicTransitionCSS } from "../../src/styles/styles";

export const responsiveContainerCSS: CSSObject = {
  display: "flex",
  justifyContent: "center",
};

export const punchlineCSS: CSSObject = {
  fontSize: "1.5rem",
  [breakpointKey("small")]: {
    fontSize: "1.3rem",
  },
  fontWeight: 900,
  textAlign: "center",
};

export const responsiveContainerInsideCSS: CSSObject = {
  [breakpointKey("normal")]: {
    minWidth: "60rem",
    maxWidth: "80rem",
  },
  [breakpointKey("small")]: {
    minWidth: "90vw",
    // padding: '0.2rem',
  },
};

// CLIENTS LOGOSexport const
export const clientsLogoGridCSS: CSSObject = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "space-around",
  maxWidth: "90vw",
};
export const clientLogoCSS: CSSObject = {
  [breakpointKey("small")]: {
    minWidth: "8em",
    minHeight: "8em",
    margin: "1em",
  },

  [breakpointKey("normal")]: {
    minWidth: "8em",
    minHeight: "8em",
    margin: "2em",
  },
};

export const imageBackgroundCSS = (url: string): CSSObject => {
  return {
    background: `url(${url})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    opacity: 0.7,
    // filter: 'grayscale(30%)',
    ...basicTransitionCSS,

    "&:hover": {
      ...basicTransitionCSS,
      cursor: "pointer",
      filter: "none",
      opacity: 1,
      transform: "scale(1.05)",
    },
  };
};
