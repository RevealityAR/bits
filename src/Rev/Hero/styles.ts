import { CSSObject } from '@emotion/react'
import { breakpointKey } from '../../styles/styles'
import { Theme } from '@mui/material'
import { themedACSS } from '../../styles/styles'

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
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
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

export const logoAndVideoContainerCSS: CSSObject = {
  minWidth: '30vw',
  maxWidth: '40vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  [breakpointKey('small')]: {
    minWidth: '90vw',
  },
}

export const logoContainerCSS: CSSObject = {
  width: '5rem',
  height: `${5 * 1.5}rem`,

  marginBottom: 0,
  opacity: 0.9,
  padding: '2rem',
  [breakpointKey('small')]: {
    width: '5rem',
    height: `${5 * 1.5}rem`,
  },
}

export const badgeContainerCSS: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

export const mainVideoContainerCSS: CSSObject = {
  [breakpointKey('normal')]: {
    minWidth: '40rem',
    maxWidth: '50rem',
  },
  [breakpointKey('small')]: {
    minWidth: '90vw',
    padding: '0.2rem',
    paddingTop: '3rem',
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
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
  paddingLeft: '5rem',
  paddingRight: '5rem',
  fontSize: '1.1em',
  textAlign: 'center',
}

export const joinBetaCallCSS = (theme: Theme): CSSObject => {
  return {
    textAlign: 'center',
    fontSize: '1em',
    fontWeight: 600,
  }
}

export const mainVideoCSS: CSSObject = {
  borderRadius: '20px',
  height: '70vh',
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
