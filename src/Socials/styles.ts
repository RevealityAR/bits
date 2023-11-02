import { CSSObject, Theme } from "@emotion/react";
import { basicTransitionCSS } from "../styles/styles";

export const socialLinksCSS: CSSObject = {
  display: "flex",
  flexDirection: "column",
};

export const socialLinksMediaListCSS: CSSObject = {
  display: "flex",
  flexDirection: "row",
  fontSize: "2rem",
  justifyContent: "center",
};

export const socialIconCSS = (theme: Theme): CSSObject => {
  return {
    padding: "1rem",
    ...basicTransitionCSS,
    color: theme.palette.text.primary,

    "&:hover": {
      ...basicTransitionCSS,
      transform: "scale(1.2)",
      color: theme.palette.action.hover,
    },
  };
};

export const headerCSS: CSSObject = {
  fontSize: "2em",
  fontWeight: 600,
  marginBottom: "2rem",
  textAlign: "center",
};
