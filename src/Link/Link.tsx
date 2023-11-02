import { Link as GatsbyLink } from "gatsby";
import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { PropsWithChildren } from "react";
import { CSSObject, useTheme } from "@emotion/react";
import { basicTransitionCSS } from "../styles/styles";

interface LinkProps extends MuiLinkProps, PropsWithChildren {}

const themedACSS = (accentColor: string): CSSObject => {
  const underlineColor = `${accentColor}94`; //`rgba(${accentColor}, 0.3)`; //rgba(150,150,150, 0.5);
  return {
    borderBottom: `4px solid ${underlineColor}`,
    ...basicTransitionCSS,
    "&:hover": {
      backgroundColor: `${underlineColor}`,
      borderBottom: "4px solid transparent",
      ...basicTransitionCSS,
    },
  };
};

// This is coming from Gatsby's doc: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#reminder-use-link-only-for-internal-links
function isExternalLink(path: string) {
  return /^\/(?!\/)/.test(path);
}

export default function Link({ href, children, ...other }: LinkProps) {
  const theme = useTheme();
  return (
    <MuiLink
      color={theme.palette.text.primary}
      underline="none"
      {...(isExternalLink(href ?? "")
        ? {
            component: GatsbyLink,
            to: href,
          }
        : { href })}
      sx={themedACSS(theme.palette.action.hover)}
      {...(other.target === "_blank" ? { rel: "noopener noreferrer" } : {})}
      {...other}
    >
      {children}
    </MuiLink>
  );
}
