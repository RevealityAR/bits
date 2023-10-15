import { CSSObject } from '@emotion/react'
import {
  breakpointKey,
  themedACSS,
  basicTransitionCSS,
} from '../../styles/styles'
import { Theme } from '@mui/material'

export const responsiveContainerCSS: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
}

export const responsiveContainerInsideCSS: CSSObject = {
  [breakpointKey('normal')]: {
    minWidth: '60rem',
    maxWidth: '80rem',
  },
  [breakpointKey('small')]: {
    minWidth: '90vw',
    // padding: '0.2rem',
  },
}

export const mainViewCSS: CSSObject = {
  ...responsiveContainerCSS,
  justifyContent: 'center',
  alignItems: 'center',
  // minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '8rem',
  marginBottom: '8rem',
}

export const mainViewInsideCSS: CSSObject = {
  ...responsiveContainerInsideCSS,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  [breakpointKey('small')]: {
    flexDirection: 'column',
  },
}

export const punchlineCSS: CSSObject = {
  fontSize: '2rem',
  [breakpointKey('small')]: {
    fontSize: '3rem',
  },
  fontWeight: 900,
  textAlign: 'center',
}

export const punchlineParagraphCSS: CSSObject = {
  fontSize: '1.1em',
  textAlign: 'center',
}

// CLIENTS LOGOSexport const
export const clientsLogoGridCSS: CSSObject = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-around',
  maxWidth: '90vw',
}
export const clientLogoCSS: CSSObject = {
  [breakpointKey('small')]: {
    minWidth: '8em',
    minHeight: '8em',
    margin: '1em',
  },

  [breakpointKey('normal')]: {
    minWidth: '8em',
    minHeight: '8em',
    margin: '2em',
  },
}

export const imageBackgroundCSS = (url: string): CSSObject => {
  return {
    background: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    opacity: 0.7,
    // filter: 'grayscale(30%)',
    ...basicTransitionCSS,

    '&:hover': {
      ...basicTransitionCSS,
      cursor: 'pointer',
      filter: 'none',
      opacity: 1,
      transform: 'scale(1.05)',
    },
  }
}

export const contactInfosCSS = (theme: Theme): CSSObject => {
  return {
    marginTop: '2em',
    fontSize: '1.1em',
    textAlign: 'center',
    lineHeight: 1,
    a: {
      ...themedACSS(theme.palette.secondary.main),
    },
  }
}
