import { CSSObject, Theme } from "@emotion/react";
import { themedACSS } from "../styles/styles";

export const containerCSS: CSSObject = {
  paddingTop: "3em",
  fontSize: "0.8em",
  lineHeight: "1.4em",
};

export const separatorCSS = (theme: Theme): CSSObject => {
  const color = "dimgray";
  return {
    backgroundColor: color,
    border: "none",
    height: "3px",
    width: "50px",
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
    margin: "0 auto",
    marginTop: "1rem",
    marginBottom: "1rem",
  };
};

export const socialLinksCSS: CSSObject = {
  paddingLeft: "1em",
  paddingRight: "1em",
  display: "flex",
  flexDirection: "column",
  marginTop: "3em",
};

export const socialLinksMediaListCSS: CSSObject = {
  display: "flex",
  flexDirection: "row",
  fontSize: "1em",
  justifyContent: "center",
};

export const socialIconCSS = (theme: Theme): CSSObject => {
  return {
    width: "30px",
    height: "30px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "20px",
    paddingBottom: "20px",

    path: {
      fill: "gray",
      transition: "all 0.1s ease-in",
    },
    transition: "all 0.1s ease-in",

    "&:hover": {
      transition: "all 0.1s ease-in",
      transform: "scale(1.2)",

      path: {
        fill: theme.palette.primary.main,
        transition: "all 0.1s ease-in",
      },
    },
  };
};

export const authorCSS = (theme: Theme): CSSObject => {
  return {
    textAlign: "center",
    color: "dimgray",

    a: {
      ...themedACSS(theme.palette.primary.main),
    },
  };
};

export const linksCSS = (theme: Theme): CSSObject => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    a: {
      ...themedACSS(theme.palette.primary.main),
      margin: "0.5em",
    },
  };
};

export const mailCSS = (theme: Theme): CSSObject => {
  return {
    textAlign: "center",

    a: {
      ...themedACSS(theme.palette.primary.main),
      margin: "0.5em",
    },
  };
};
