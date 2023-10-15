import { CSSObject } from '@emotion/react'
import { breakpointKey } from '../../styles/styles'
import { Theme } from '@mui/material'

export const gridCSS = (theme: Theme): CSSObject => {
  return {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '90rem',
    width: '100%',
    padding: 0,
    color: theme.palette.secondary.contrastText,
  }
}

export const postCSS = (theme: Theme, color: string): CSSObject => {
  return {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.secondary.contrastText,
    // border-radius: 5px;
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
      height: '40vh',
      marginTop: '1em',
      marginCottom: '1em',
    },

    [breakpointKey('normal')]: {
      margin: '1em',
      width: '28vw',
      height: '30vw',
      maxWidth: '28em',
      maxHeight: '20em',
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
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  borderRadius: '10px',
}
