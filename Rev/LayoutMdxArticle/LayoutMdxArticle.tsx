import React from 'react'
import LayoutRoot from '../LayoutRoot/LayoutRoot'
import 'moment'
import { MDXProvider } from '@mdx-js/react'
import SEO from '../../SEO/SEO'
import { graphql, Link } from 'gatsby'
import { SHORTCODES } from '../../mdx-components/shortcodes'
import {
  nextPrevLinkInsideCoverCSS,
  nextPrevLinkCSS,
  articleCSS,
  coverBandCSS,
  coverBandOverlayCSS,
  punchlineCSS,
  subtextCSS,
  pageCSS,
  cardCSS,
} from './styles'

export default function Template({
  data: { mdx },
  children,
  location,
  pageContext: { previousPost, nextPost, langCode },
}) {
  // content is at false is no previous or next
  const previousPostHtml = previousPost ? (
    <Link to={`${previousPost.frontmatter.path}#content`}>
      ← {previousPost.frontmatter.title}
    </Link>
  ) : (
    <div></div>
  )
  const nextPostHtml = nextPost ? (
    nextPost && (
      <Link to={`${nextPost.frontmatter.path}#content`}>
        {nextPost.frontmatter.title} →
      </Link>
    )
  ) : (
    <div></div>
  )

  return (
    <LayoutRoot language={mdx.frontmatter.language} location={{ ...location }}>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description || mdx.frontmatter.subtitle}
        image={
          mdx.frontmatter.image.childImageSharp.gatsbyImageData.images
            .sources[0]
        }
        pathname={mdx.frontmatter.path}
        article={true}
        langCode={langCode}
        useRobotoFont={true}
      />
      <div css={(theme) => coverBandCSS(theme)} id="content">
        <div css={coverBandOverlayCSS}>
          <h1 css={punchlineCSS}>{mdx.frontmatter.title}</h1>
          <h2 css={subtextCSS}>
            <p>
              <strong>{mdx.frontmatter.subtitle} </strong>
              <br />{' '}
            </p>
          </h2>
        </div>
        <div css={nextPrevLinkInsideCoverCSS}>
          {previousPostHtml}
          {nextPostHtml}
        </div>
      </div>

      <div css={(theme) => pageCSS(theme)}>
        <article
          css={cardCSS}
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div css={articleCSS}>
            <br />
            <br />
            <MDXProvider components={SHORTCODES}>{children}</MDXProvider>
            <div css={(theme) => nextPrevLinkCSS(theme)}>
              {previousPostHtml}
              {nextPostHtml}
            </div>
          </div>
        </article>
      </div>
    </LayoutRoot>
  )
}

export const articlePageQueryRev = graphql`
  query MdxArticleByPath($markdownPath: String!, $langCode: String!) {
    mdx(
      frontmatter: { path: { eq: $markdownPath }, language: { eq: $langCode } }
    ) {
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        language
        description
        embeddedImagesLocal {
          ...modernGatImage
        }
        image {
          colors {
            ...GatsbyImageColors
          }
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 700)
          }
        }
      }
    }
  }
`
