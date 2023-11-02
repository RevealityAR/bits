import { CSSObject, Theme } from "@emotion/react";

export const contactCSS = (theme: Theme): CSSObject => {
  return {
    fontSize: "1.2em",
    textAlign: "center",
    color: theme.palette.text.primary,
    lineHeight: 1.6,
  };
};
