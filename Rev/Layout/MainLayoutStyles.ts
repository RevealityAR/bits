import { CSSObject } from '@emotion/react'
import { breakpointKey } from '../components/styles'

export const gridAppBarCSS: CSSObject = {
  justifySelf: 'stretch',
  gridArea: 'nav',
  textAlign: 'center',
  zIndex: 10,
  backgroundColor: 'transparent',
  [breakpointKey('normal')]: {
    display: 'none',
    zIndex: 0,
  },
}

export const gridNavBarCSS: CSSObject = {
  justifySelf: 'stretch',
  gridArea: 'nav',
  textAlign: 'right',
  position: 'sticky',
  top: 0,
  zIndex: 1,
  backgroundColor: '#fcf9e8',
  // bottom nav menu
  // @include breakpoint(small) {
  //   grid-area: navBottom;
  //   padding: 0;
  //   //position: sticky; TODO: use this and remove width when firefox mobile doesnt jump on scroll anymore (May 2020)
  //   // position: fixed;
  //   // width: 100vw;
  //   bottom: 0;
  //   z-index: 1;
  // }
}

export const gridNavContentFooterCSS: CSSObject = {
  width: '100%',
  margin: 0,
  padding: 0,
  display: 'grid',
  gridGap: 0,
  gridTemplateAreas: `'nav nav' 'content content' 'content content' 'footer footer' 'navBottom navBottom'`,
  justifyItems: 'stretch',
}

export const gridContentCSS: CSSObject = {
  gridArea: 'content',
  zIndex: 0,
  background: `linear-gradient(25deg, #e5f9ff 0%, #fcf9e8 100%)`,
}

export const gridFooter: CSSObject = {
  gridArea: 'footer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  zIndex: 0,
  backgroundColor: '#e5f9ff',
}

export const gridBottomBar: CSSObject = {
  gridArea: 'bottom',
  justifySelf: 'stretch',
  textAlign: 'right',
  backgroundColor: 'transparent',
  color: 'white',
  // STUFF for responsive navbar using an overlay
  // Z-index tweak allows gridNavBar to be TRULY overlaying every other element if it wants to, even if they are in position absolute/relative
  position: 'sticky',
  bottom: 0,
  zIndex: 1,
}

export const styleContentCSS: CSSObject = {
  backgroundColor: 'transparent',
  borderTop: 0,
  // padding-bottom: 4em;
  [breakpointKey('small')]: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    border: 'none',
  },
}
