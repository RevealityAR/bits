import { CSSObject } from "@emotion/react";
import { Theme } from "@mui/material";
import { breakpointKey } from "../../src/styles/styles";

export const linkStyle = (theme: Theme): CSSObject => {
  return {
    textTransform: "uppercase",
    padding: "0.8em",
    margin: 0,
    marginRight: "2em",
    marginLeft: "2em",
    color: theme.palette.secondary.contrastText,
    fontSize: "1.2em",
    border: "solid 2px transparent",
    textDecoration: "none",

    "&:hover": {
      // color: $colorActive,
      cursor: "pointer",
      textDecoration: "none",
      transition: "all 0.1s ease-in-out 0s",
      boxShadow: `0px 2px 0px ${theme.palette.secondary.contrastText}`,
    },

    "&:active, &:focus": {
      outline: 0,
      outlineStyle: "none",
    },

    [breakpointKey("normal")]: {
      textAlign: "right",
    },
    [breakpointKey("small")]: {
      textAlign: "center",
    },
  };
};

export const headerLinksCSS = (theme: Theme): CSSObject => {
  return {
    userSelect: "none",
    a: {
      ...linkStyle(theme),
    },
    [breakpointKey("small")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },

    [breakpointKey("normal")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  };
};

export const smallNavbarCSS: CSSObject = {
  [breakpointKey("normal")]: {
    display: "none",
  },
};

export const bigNavbarCSS = (theme: Theme): CSSObject => {
  return {
    [breakpointKey("small")]: {
      display: "none",
    },
  };
};

export const activeLinkCSS = (theme: Theme): CSSObject => {
  return {
    color: theme.palette.primary.main,
    fontWeight: 600,
    boxShadow: `0px 2px 0px ${theme.palette.secondary.contrastText}`,
  };
};
