import React from 'react'
import {
  punchlineCSS,
  mainViewCSS,
  howDoesItWorkCSS,
  howDoesItWorkPartCSS,
  subjectTitleCSS,
  subjectVideoCSS,
  subjectSublineCSS,
  sublineCSS,
} from './styles'
import { strings } from './strings'
import { LangCode } from '../../types'

import subjectRaw from './../../../pages/app_shoot.webm'
import subjectAlpha from './../../../pages/app_create.webm'
import subjectMix from './../../../pages/app_share.webm'
import subjectRawSafariIos from './../../../pages/app_shoot.mp4'
import subjectAlphaSafariIos from './../../../pages/app_create.mp4'
import subjectMixSafariIos from './../../../pages/app_share.mp4'
import { useTheme } from '@mui/material'

interface OwnProps {
  langCode: LangCode
}
export default function TheApp({ langCode }: OwnProps) {
  const theme = useTheme()
  return (
    <div css={mainViewCSS}>
      <h1 css={{ ...punchlineCSS, marginTop: '8rem', marginBottom: '2rem' }}>
        {strings['punchline'][langCode]}
      </h1>
      <p css={sublineCSS}>{strings['subline'][langCode]}</p>
      <div css={howDoesItWorkCSS}>
        <div css={howDoesItWorkPartCSS}>
          <h3 css={subjectTitleCSS(theme)}>
            {strings['experiment'][langCode]}
          </h3>
          <p css={subjectSublineCSS(theme)}>
            {strings['experimentDetails'][langCode]}
          </p>

          <video autoPlay muted loop playsInline css={subjectVideoCSS}>
            <source src={subjectRaw} type="video/webm" />
            <source src={subjectRawSafariIos} type="video/mp4" />
          </video>
        </div>
        <div css={howDoesItWorkPartCSS}>
          <h3 css={subjectTitleCSS(theme)}>{strings['create'][langCode]}</h3>
          <p css={subjectSublineCSS(theme)}>
            {strings['createDetails'][langCode]}
          </p>
          <video autoPlay muted loop playsInline css={subjectVideoCSS}>
            <source src={subjectAlpha} type="video/webm" />
            <source src={subjectAlphaSafariIos} type="video/mp4" />
          </video>
        </div>

        <div css={howDoesItWorkPartCSS}>
          <h3 css={subjectTitleCSS(theme)}>{strings['publish'][langCode]}</h3>
          <p css={subjectSublineCSS(theme)}>
            {strings['publishDetails'][langCode]}
          </p>
          <video autoPlay muted loop playsInline css={subjectVideoCSS}>
            <source src={subjectMix} type="video/webm" />
            <source src={subjectMixSafariIos} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
