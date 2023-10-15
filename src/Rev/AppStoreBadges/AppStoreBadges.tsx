import { CSSObject } from '@emotion/react'
import { Link } from 'gatsby'
import appleBadge from './appleBadge.svg'
import googleBadge from './googleBadge.svg'

export const googleBadgeCSS: CSSObject = {
  width: '10rem',
  height: '3rem',
  margin: '1rem',
  background: `url(${googleBadge})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}

const appleBadgeCSS: CSSObject = {
  width: '10rem',
  height: '3rem',
  margin: '1rem',
  background: `url(${appleBadge})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
}
export default function AppStoreBadges() {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
      }}
    >
      <Link
        css={appleBadgeCSS}
        to={'https://apps.apple.com/app/reveality/id1619973575'}
        target="_blank"
        rel="noopener"
      ></Link>
      <Link
        css={googleBadgeCSS}
        to={'https://play.google.com/store/apps/details?id=io.reveality.app'}
        target="_blank"
        rel="noopener"
      ></Link>
    </div>
  )
}
