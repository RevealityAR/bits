import { CSSObject } from "@emotion/react";
import {
  basicTransitionCSS,
  breakpointKey,
  themedACSS,
} from "../../styles/styles";
const color = "#34393a";

const $accentColorIdle = "black"; //rgb(77, 102, 153);
const $colorUnselected = "rgb(200, 200, 200)";

// Possibility to override through this file
// @import '../../components/bitStyleOverride.scss';

const $colorHover = $accentColorIdle;
const $underlineColor = `rgba(#649DE5, 0.3)`;

export const insideCSS: CSSObject = {
  paddingTop: "3em",
  marginBottom: "3em",
  fontSize: "0.8em",
  lineHeight: "1.4em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  [breakpointKey("small")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const separatorCSS: CSSObject = {
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

export const footerCSS: CSSObject = {
  marginTop: "2rem",
  color: color,

  [breakpointKey("normal")]: {
    minWidth: "50rem",
    maxWidth: "90rem",
  },
  [breakpointKey("small")]: {
    minWidth: "90vw",
  },
};

export const linksCSS: CSSObject = {
  paddingTop: "2em",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  textAlign: "center",
  [breakpointKey("small")]: {
    flexDirection: "row",
  },

  a: {
    ...themedACSS("#649DE5"),
    margin: "0.5em",
  },
};

export const socialLinksCSS: CSSObject = {
  paddingLeft: "1em",
  paddingRight: "1em",
  display: "flex",
  flexDirection: "column",
};

export const socialMediaListCSS: CSSObject = {
  display: "flex",
  flexDirection: "row",
  fontSize: "1em",
  justifyContent: "center",
};

export const socialIconCSS: CSSObject = {};

export const svgIconCSS: CSSObject = {
  width: "30px",
  height: "30px",
  marginLeft: "10px",
  marginRight: "10px",
  marginTop: "20px",
  marginBottom: "20px",
  transition: "all 0.2s ease-in",
  path: {
    fill: $colorUnselected,
    transition: "all 0.2s ease-in",
  },

  "&:hover": {
    transition: "all 0.1s ease-in",
    path: {
      fill: $colorHover,
      transition: "all 0.1s ease-in",
    },
  },
};

const threeBlocksMiddleCentered: CSSObject = {
  [breakpointKey("small")]: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  [breakpointKey("normal")]: {
    width: "30vw",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
};

export const contactCSS: CSSObject = {
  ...threeBlocksMiddleCentered,
};

const textContent: CSSObject = {
  fontSize: "1.2em",
  textAlign: "center",
  color: color,
  lineHeight: 1.6,
  a: {
    ...themedACSS("#649DE5"),
  },
};

export const contactInfosCSS: CSSObject = {
  ...textContent,
};

export const headerCSS: CSSObject = {
  fontSize: "2em",
  fontWeight: 600,
  marginBottom: "0.4em",
};

export const followUsCSS: CSSObject = {
  p: {
    textAlign: "center",
    color: color,
  },
};

export const followUsStuffCSS: CSSObject = {
  fontSize: "2rem",
  marginTop: "2rem",
  marginBottom: "2rem",
  textAlign: "center",

  a: {
    padding: "1rem",
    $underlineColor: "rgba(#649de5, 1)", //rgba(150,150,150, 0.5);
    textDecoration: "none",
    // border-bottom: 4px solid $underlineColor;
    color: "#34393a",
    lineHeight: 1.5,
    ...basicTransitionCSS,
    "&:hover": {
      transform: "scale(1.3)",
      color: "#649DE5",
      // workaround for some material icons (like twitter)
      svg: {
        ...basicTransitionCSS,
        color: "#649DE5",
      },
      // border-bottom: 4px solid transparent;
      // color: white;
      outline: 0,
      ...basicTransitionCSS,
    },

    "&:visited": {
      textDecoration: "none",
      color: "inherit",
    },

    "&:active, &:focus": {
      outline: 0,
      outlineStyle: "none",
    },
  },
};
