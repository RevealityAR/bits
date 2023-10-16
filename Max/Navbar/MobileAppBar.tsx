import React from "react";
import { Link } from "gatsby";
import { CSSObject } from "@emotion/react";
import { Theme } from "@mui/material";
import { breakpointKey } from "../../src/styles/styles";
import { linkStyle } from "./styles";

const mobileAppBarCSS = (theme: Theme): CSSObject => {
  return {
    paddingBottom: "1em",
    paddingTop: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    a: {
      ...linkStyle(theme),
      fontSize: "1.1em",
      fontWeight: 600,
      padding: "1em",
      color: theme.palette.secondary.contrastText,
      "&:hover": {
        color: theme.palette.secondary.contrastText,
      },
      boxShadow: `inset 0 -2px 0 0 ${theme.palette.secondary.contrastText}`,
    },
    // Final
    [breakpointKey("normal")]: {
      display: "none",
    },
  };
};

interface OwnProps {
  title: string;
}

export default function MobileAppBar({ title }: OwnProps) {
  return (
    <div css={mobileAppBarCSS}>
      <Link activeClassName="" to="/">
        {title}
      </Link>
    </div>
  );
}
