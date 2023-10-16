import React from "react";
import Footer from "../../src/Footer/Footer";
import HoloNavbar from "../RealNavbar/Navbar";
import RevealityFooter from "../RealFooter/Footer";
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ThemeProvider, Global } from "@emotion/react";
import LanguageSwitcher from "../../Common/LanguageSwitcher/LanguageSwitcher";
import { defaultLang } from "../../../locales/locales";
import { languageAutoRedirect } from "../../Common/locales/localeUtils";
import { navbarConfig, footerConfig } from "../../../globalConfig";
import {
  appBarCSS,
  customColorCSS,
  gridContentCSS,
  gridFooterCSS,
  gridNavBarCSS,
  gridNavContentFooterCSS,
} from "./styles";
import { bodyCSS } from "../../../globalStyles";

interface OwnProps {
  children: any;
  language: any;
  location: any;
}
export default function LayoutRoot({ children, language, location }: OwnProps) {
  // const isItRootUrl =
  //   location.pathname === '/' ||
  //   location.pathname === '/fr' ||
  //   location.pathname === '/fr/'
  // homepage: single slash

  if (language !== "fr" && language !== "en") {
    language = defaultLang;
  }
  // Skip build, Browsers only
  if (typeof window !== "undefined") {
    languageAutoRedirect(language, location.pathname);
  }
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#2771cc", // Sky blue
      },
      secondary: {
        main: "#649DE5", // Sky Blue Hover
      },
      info: {
        main: "#2A6DBF",
      },
      background: {
        default: "#fcf9e8",
        paper: "transparent",
      },
      action: {
        hover: "rgba(0,0,0,0.56)",
      },

      // FOR TEXT ? #34393A
      // action: {
      //   hover: 'rgba(0,0,0,0.56)',
      // },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });

  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            body: bodyCSS(theme),
          }}
        />
        <div css={gridNavContentFooterCSS}>
          {/* <div css={{ ...appBarCSS, ...customColorCSS(theme) }}> */}
          {/* <MobileAppBar title={navbarConfig.name} /> */}
          {/* </div> */}
          <nav css={gridNavBarCSS}>
            <HoloNavbar
              currentLangCode={language}
              currentUrl={location.pathname}
            />
            {/* <Navbar title={navbarConfig.name} links={navbarConfig.links[language].links} /> */}
          </nav>
          <div css={gridContentCSS}>{children}</div>
          <div css={gridFooterCSS}>
            <RevealityFooter
              lang={language}
              customLinks={footerConfig[language].links}
            />
          </div>
        </div>
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}
