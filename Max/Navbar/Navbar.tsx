import React from 'react'
import { Link } from 'gatsby'
import MobileNavbar from './MobileNavbar'
import { Theme, useTheme } from '@emotion/react'
import {
  headerLinksCSS,
  bigNavbarCSS,
  smallNavbarCSS,
  activeLinkCSS,
} from './styles'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

// Navbar.propTypes = {
//   title: PropTypes.string,
//   links: PropTypes.array,
// }

// Navbar.defaultProps = {
//   title: 'SiteTitle',
//   links: [
//     { path: '/', name: 'rootLink' },
//     { path: '/somePath', name: 'somePage' },
//     { path: '/otherPath', name: 'otherPage' },
//   ],
// }

interface NavbarLink {
  path: string
  name: string
}
interface OwnProps {
  title: string
  links: NavbarLink[]
}

export default function Navbar({ title, links }: OwnProps) {
  const theme = useTheme()

  const menuItems = () => {
    return (
      <>
        <Link activeClassName="" to="/">
          {title}
        </Link>
        {links.map((link) => (
          <Link
            activeStyle={activeLinkCSS(theme)}
            to={link.path}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </>
    )
  }

  return (
    <>
      <div css={smallNavbarCSS}>
        <MobileNavbar links={links} />
      </div>
      <div css={bigNavbarCSS(theme)}>
        <div css={headerLinksCSS(theme)}>{menuItems()}</div>
      </div>
    </>
  )
}
