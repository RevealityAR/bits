import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import MainLayout from './MainLayout'
import './BasicPage.scss'
import 'moment'
import SEO from '../bits/SEO/SEO'
import { SHORTCODES } from './MdxBits'

export const pageQuery = graphql`
  query MdxPageByPath($markdownPath: String, $langCode: String!) {
    mdx(
      frontmatter: { path: { eq: $markdownPath }, language: { eq: $langCode } }
    ) {
      frontmatter {
        path
        title
        language
        description
        embeddedImagesLocal {
          ...modernGatImage
        }
      }
    }
  }
`

export default function Template({ data: { mdx }, location, pageContext }) {
  const { langCode } = pageContext
  return (
    <MainLayout language={mdx.frontmatter.language} location={{ ...location }}>
      <SEO
        title={mdx.frontmatter.title}
        description={
          mdx.frontmatter.description || mdx.frontmatter.subtitle || null
        }
        pathname={mdx.frontmatter.path}
        article={true}
        langCode={langCode}
      />
      <div className="Page">
        <article className="card article" id="content">
          <header
            className="header"
            style={{ paddingTop: '1em', paddingBottom: '2em' }}
          ></header>
          <div className="content" itemProp="articleBody">
            <MDXProvider components={SHORTCODES}>
              <MDXRenderer
                remoteImages={mdx.frontmatter.embeddedImagesRemote}
                localImages={mdx.frontmatter.embeddedImagesLocal}
              >
                {mdx.body}
              </MDXRenderer>
            </MDXProvider>
          </div>
        </article>
      </div>
    </MainLayout>
  )
}
