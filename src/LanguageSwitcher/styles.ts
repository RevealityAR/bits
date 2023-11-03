import { CSSObject } from "@emotion/react";

export const containerCSS = (): CSSObject => {
  return {
    display: "flex",
    margin: "auto",
    flexDirection: "row",
  };
};

export const buttonCSS = (isCurrentLanguage: boolean): CSSObject => {
  const base = {};
  if (isCurrentLanguage) {
    return {
      ...base,
      fontWeight: "900",
    };
  }
  return base;
};
