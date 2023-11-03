import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { MenuLink } from "../MenuLink";
import { ReactElement } from "react";
import { Interpolation, Theme } from "@emotion/react";
import { LanguageSwitcher, LanguageSwitcherProps } from "../LanguageSwitcher";

export interface NavbarProps<LangCode extends string> {
  pages?: { name: string; path: string }[];
  icon?: ReactElement;
  languageSwitcher?: LanguageSwitcherProps<LangCode>;
  css?: Interpolation<Theme>;
}

export default function Navbar<LangCode extends string>({
  icon,
  pages,
  languageSwitcher,
  css,
}: NavbarProps<LangCode>) {
  return (
    <AppBar
      position="relative"
      css={[css, { marginBottom: "2em" }]}
      color="transparent"
      sx={{ boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: icon ? "space-between" : "center",
          alignItems: "center",
        }}
        component="nav"
      >
        {icon && (
          <MenuLink withLogo to="/">
            {icon}
          </MenuLink>
        )}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {pages?.map((page) => (
            <MenuLink
              css={{ marginRight: "2em", marginLeft: "2em" }}
              key={page.name}
              to={page.path}
            >
              {page.name}
            </MenuLink>
          ))}
          {languageSwitcher && <LanguageSwitcher {...languageSwitcher} />}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
