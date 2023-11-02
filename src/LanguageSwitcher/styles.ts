import { CSSObject } from "@emotion/react";

export const containerCSS = (): CSSObject => {
  return {
    padding: "1em",
    display: "flex",
    margin: "auto",
    flexDirection: "row",
  };
};

export const buttonCSS = (isCurrentLanguage: boolean): CSSObject => {
  const base = { margin: "0.2em", padding: "0.2em" };
  if (isCurrentLanguage) {
    return {
      ...base,
      fontWeight: "900",
    };
  }
  return base;
};
