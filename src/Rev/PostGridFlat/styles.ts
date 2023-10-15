import { CSSObject } from '@emotion/react'
import { breakpointKey } from '../../styles/styles'
import { Theme } from '@mui/material'

export const gridCSS = (theme: Theme): CSSObject => {
  return {
    margin: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '90rem',
    width: '100%',
    padding: 0,
    color: theme.palette.secondary.contrastText,
    textAlign: 'center',
  }
}

export const postCSS = (theme: Theme, color: string): CSSObject => {
  return {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.secondary.contrastText,

    // backgroundColor: 'transparent',
    // border: solid 2px $black
    transform: 'scale(0.97)',
    fontSize: '1rem',

    opacity: 0.9,

    // transition: `-webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    //   transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    //   filter 250ms cubic-bezier(0.4, 0, 0.2, 1),
    //   opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
    transition: `color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    filter 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)`,
    textDecoration: 'none', // Post is a link element

    [breakpointKey('small')]: {
      width: '90vw',
      height: '90vh',
      maxHeight: '90vw',
      marginTop: '1em',
      marginCottom: '1em',
    },

    [breakpointKey('normal')]: {
      margin: '1em',
      width: '30vw',
      height: '30vw',
      maxWidth: '25em',
      maxHeight: '25em',
    },

    '&:hover': {
      border: 'none',
      cursor: 'pointer',
      transform: 'none',
      opacity: 1,
      color: `${color} !important`,
    },
  }
}

export const postHeadCSS: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
}

export const postTitleCSS: CSSObject = {
  fontSize: '1.5em',
  fontWeight: 600,
  padding: '0.5rem',
  paddingBottom: 0,
  paddingLeft: 0,
  marginBottom: 0,
}

export const postSubtitleCSS: CSSObject = {
  fontSize: '1em',
  boxDecorationBreak: 'clone',
  padding: '0.5rem',
  paddingLeft: 0,
}

export const postPictureCSS: CSSObject = {
  flexGrow: 1,
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center top',
  borderRadius: '1000px',
}
