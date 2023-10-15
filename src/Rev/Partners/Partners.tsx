import React from 'react'
import {
  punchlineCSS,
  responsiveContainerCSS,
  responsiveContainerInsideCSS,
  clientLogoCSS,
  clientsLogoGridCSS,
  imageBackgroundCSS,
} from './styles'
import { strings } from './strings'
import { LangCode } from '../../types'
import { PARTNERS_LOGOS, CLIENTS_LOGOS } from '../../../logos'

import { useTheme } from '@mui/material'

interface OwnProps {
  langCode: LangCode
}
export default function Partners({ langCode }: OwnProps) {
  const theme = useTheme()
  return (
    <>
      <h3 css={punchlineCSS}>{strings['clients'][langCode]}</h3>
      <div css={responsiveContainerCSS}>
        <div css={responsiveContainerInsideCSS}>
          <div css={clientsLogoGridCSS}>
            {CLIENTS_LOGOS.map((logo) => {
              return (
                <a
                  key={logo.siteUrl}
                  css={{
                    ...clientLogoCSS,
                    ...imageBackgroundCSS(logo.imageUrl),
                    transform: `scale(${logo.scale ? logo.scale : 1})`,
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={logo.siteUrl}
                />
              )
            })}
          </div>
        </div>
      </div>

      <h3 css={punchlineCSS}>{strings['coachs'][langCode]}</h3>
      <div css={responsiveContainerCSS}>
        <div css={responsiveContainerInsideCSS}>
          <div css={clientsLogoGridCSS}>
            {PARTNERS_LOGOS.map((logo) => {
              return (
                <a
                  key={logo.siteUrl}
                  css={{
                    ...clientLogoCSS,
                    ...imageBackgroundCSS(logo.imageUrl),
                    transform: `scale(${logo.scale ? logo.scale : 1})`,
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={logo.siteUrl}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
