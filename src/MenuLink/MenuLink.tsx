import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import { PropsWithChildren, PropsWithoutRef } from "react";
import { CSSObject, Theme, useTheme } from "@emotion/react";

interface MenuLinkProps<TState>
  extends PropsWithoutRef<GatsbyLinkProps<TState>>,
    PropsWithChildren {
  withLogo?: boolean;
}

const activeLinkCSS = (color: string): CSSObject => {
  return {
    fontWeight: 600,
    boxShadow: `0px 2px 0px ${color}`,
  };
};

export const linkStyle = (theme: Theme): CSSObject => {
  return {
    textTransform: "uppercase",
    margin: 0,
    color: theme.palette.text.primary,
    fontSize: "1.2em",
    border: "solid 2px transparent",
    textDecoration: "none",

    "&:hover": {
      textDecoration: "none",
      transition: "all 0.1s ease-in-out 0s",
      boxShadow: `0px 2px 0px ${theme.palette.action.hover}`,
    },
  };
};

export const logoStyle = (theme: Theme): CSSObject => {
  return {
    color: theme.palette.text.primary,
    transition: "transform 200ms linear 0s",

    "&:hover": {
      transform: "scale(1.05)",
    },
  };
};

export default function MenuLink<TState>({
  children,
  withLogo,
  ...props
}: MenuLinkProps<TState>) {
  const theme = useTheme();
  return (
    <GatsbyLink
      css={withLogo ? logoStyle(theme) : linkStyle(theme)}
      activeStyle={withLogo ? {} : activeLinkCSS(theme.palette.text.primary)}
      {...props}
    >
      {children}
    </GatsbyLink>
  );
}
