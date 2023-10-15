import React from 'react'
import { CSSObject } from '@emotion/react'
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import MainLayout from '../layout/MainLayout'
import SEO from '../bits/SEO/SEO'
import { subscribedPageStrings } from '../locales/strings'
import { useState } from 'react'
import { breakpointKey } from '../components/styles'
import Cookies from 'universal-cookie'

const buttonCSS: CSSObject = {
  backgroundColor: '#649DE5',
  borderRadius: '100rem',
  border: 'none',
  fontWeight: 900,
  // backgroundColor: 'black',
  color: 'white',
  padding: '1em 2em 1em 2em',
  margin: '1em',
  transition: 'all 150ms linear',
  filter: 'saturate(1)',
  textDecoration: 'none',

  '&:hover': {
    transform: 'scale(1.1)',
    cursor: 'pointer',
    transition: 'all 150ms linear',
    filter: 'saturate(1.3)',
    textDecoration: 'none',
  },
}

const containerCSS: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '80vh',
}
const titleCSS: CSSObject = {
  fontSize: '2em',
  color: '#34393A',
}
const subtitleCSS: CSSObject = {
  color: '#34393A',
  fontSize: '1em',
}

export default function SubscriptionConfirmed({
  data,
  pageContext: { langCode },
  location,
}) {
  const LOCAL = subscribedPageStrings[langCode]
  const subEmail = new Cookies().get('subEmail')
  console.log('subMail', subEmail)
  return (
    <MainLayout language={langCode} location={{ ...location }}>
      <SEO title={LOCAL['seoTitle']} langCode={langCode} />
      <div css={containerCSS}>
        <h1 css={titleCSS}>{LOCAL['divTitle']}</h1>
        <p css={subtitleCSS}>{LOCAL['divSubtitle']}</p>
        <div css={{ padding: '1rem' }}>
          <Link to="https://airtable.com/shrzx2UHeHLxztADT">
            {LOCAL['formProblemFallback']}
          </Link>
        </div>

        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
        <iframe
          class="airtable-embed airtable-dynamic-height"
          src={`https://airtable.com/embed/shrzx2UHeHLxztADT?backgroundColor=purple&prefill_personMail=${
            subEmail ? subEmail : ''
          }`}
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="904px"
          css={{ background: 'transparent', border: '1px solid #ccc' }}
        ></iframe>
        <div css={{ padding: '1rem' }}>
          <Link to="https://airtable.com/shrzx2UHeHLxztADT">
            {LOCAL['formProblemFallback']}
          </Link>
        </div>

        {/* <Link to="/" css={buttonCSS}>
          {LOCAL['goBackHome']}
        </Link> */}
      </div>
    </MainLayout>
  )
}
