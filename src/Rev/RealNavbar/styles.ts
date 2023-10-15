import { CSSObject } from "@emotion/react";
import { breakpointKey } from "../../styles/styles";

export const containerCSS: CSSObject = {
  // paddingTop: '2em',
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "2em",
  paddingRight: "2em",
  color: "#34393A",
  backgroundColor: "transparent",
  // backgroundColor: '#e5f9ff',
  // background: `linear-gradient(0deg, #e5f9ff 0%, transparent 100%)`,

  [breakpointKey("small")]: {
    paddingLeft: "1em",
    paddingRight: "1em",
  },
};

export const logoCSS: CSSObject = {
  fontWeight: 900,
  fontStyle: "italic",
  // backgroundImage: 'linear-gradient(-225deg, #FFC796 0%,  #FFC796 48%, #45D4FB 100%)',
  // backgroundClip: 'text',
  // textFillColor: 'transparent',
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "2rem",
  height: `${2 * 1.5}rem`,
  // marginBottom: 0,
  opacity: 0.9,
  paddingTop: "1rem",
  paddingBottom: "1rem",
  transition: "transform 200ms linear",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

export const linkCSS: CSSObject = {
  textTransform: "uppercase",
  color: "#34393A",
  padding: "0.5em",
  textDecoration: "none",
  marginRight: "3rem",
};

export const langLinkCSS = (active: boolean): CSSObject => {
  return {
    textTransform: "uppercase",
    color: "#34393A",
    padding: "0.5em",
    textDecoration: "none",
    fontWeight: active ? 900 : 400,
  };
};
