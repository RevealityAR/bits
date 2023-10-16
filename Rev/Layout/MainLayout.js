import React from 'react'
import PropTypes from 'prop-types'
import './MainLayout.scss'
import { defaultLang } from '../locales/locales'
import { languageAutoRedirect } from '../locales/localeUtils'
import { NavbarData, FooterLinks } from './Data'
import { indexPageStrings } from '../locales/strings'
import HoloNavbar from '../../RealNavbar/Navbar'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles'
import RevealityFooter from './../../RealFooter/Footer'
// // TODO: store a cookie to enable/disable splash screen
// const theme = createMuiTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: '#6d8879',
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       main: '#516e93',
//     },
//     background: {
//       default: '#282c34',
//       paper: '#19191d',
//     },
//     action: {
//       hover: 'rgba(0,0,0,0.56)',
//     },
//     // Used by `getContrastText()` to maximize the contrast between
//     // the background and the text.
//     contrastThreshold: 3,
//     // Used by the functions below to shift a color's luminance by approximately
//     // two indexes within its tonal palette.
//     // E.g., shift from Red 500 to Red 300 or Red 700.
//     tonalOffset: 0.2,
//   },
// });

const theme = createTheme(
  adaptV4Theme({
    palette: {
      mode: 'light',
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#649DE5', // Sky blue
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#2771cc', // Sky Blue Hover
      },
      background: {
        default: '#282c34',
        paper: '#19191d',
      },
      action: {
        hover: 'rgba(0,0,0,0.56)',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  })
)

export default function MainLayout({ children, language, location }) {
  let showPerformanceOverlay = false
  const isItRootUrl =
    location.pathname === '/' ||
    location.pathname === '/fr' ||
    location.pathname === '/fr/'
  // homepage: single slash

  // Bad because language dependant...
  // if (AreWeInPerformanceMode && isItRootUrl) {
  //   showPerformanceOverlay = true;
  // }

  if (language !== 'fr' && language !== 'en') {
    language = defaultLang
  }

  const LOCAL = indexPageStrings[language]
  // Skip build, Browsers only
  if (typeof window !== 'undefined') {
    languageAutoRedirect(language, location.pathname)
  }

  return (
    <MaterialThemeProvider theme={theme}>
      <div className="CssGridNavContentFooter">
        {/* {!isItRootUrl && (
          <div className="AppBar">
            <MobileAppBar title={'The Live Drawing Project'} /> 
          </div>
        )} */}
        <nav className="gridNavBar">
          <HoloNavbar
            currentLangCode={language}
            currentUrl={location.pathname}
          />
        </nav>
        <div className="gridContent styleContent">{children}</div>

        <div className="gridFooter">
          {/* <Footer links={FooterLinks[language].links} lang={language} /> */}
          {/* {location && (
            <LanguageSwitcher
              currentLangCode={language}
              supportedLangs={Object.keys(supportedLangs)}
              currentUrl={location.pathname}
            />
          )} */}
          <RevealityFooter
            lang={language}
            links={FooterLinks[language].links}
          />
        </div>
      </div>
    </MaterialThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
  location: PropTypes.object,
}
