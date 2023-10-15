import { CSSObject, Theme } from '@emotion/react'
import { themedACSS } from '../../styles/styles'

export const containerCSS = (theme: Theme): CSSObject => {
  return {
    padding: '1em',
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
    a: {
      margin: '0.2em',
      padding: '0.2em',
      ...themedACSS(theme.palette.primary.main),
    },
  }
}
