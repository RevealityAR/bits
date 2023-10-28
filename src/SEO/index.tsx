/** @jsxImportSource @emotion/react */
import { graphql, useStaticQuery } from "gatsby";
import SEOComponent, { SEOProps as SEOComponentProps } from "./SEO";

interface SEOProps
  extends Omit<SEOComponentProps, "url" | "favicon" | "siteName"> {
  pathname?: string;
}

export function SEO({
  title,
  description,
  image,
  pathname,
  article,
  author,
  langCode,
  useRobotoFont,
}: SEOProps) {
  const {
    site: {
      siteMetadata: {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        defaultAuthor,
        siteName,
        favicon,
      },
    },
  } = useStaticQuery<{
    site: {
      siteMetadata: {
        defaultTitle?: string;
        titleTemplate?: string;
        defaultDescription?: string;
        siteUrl: string;
        defaultImage?: string;
        defaultAuthor?: string;
        siteName?: string;
        favicon?: string;
      };
    };
  }>(query);

  return (
    <SEOComponent
      title={title ?? defaultTitle}
      description={description ?? defaultDescription}
      image={image ?? defaultImage}
      url={`${siteUrl}${pathname || "/"}`}
      article={article}
      author={author ?? defaultAuthor}
      langCode={langCode}
      useRobotoFont={useRobotoFont}
      favicon={favicon}
      siteName={siteName ?? title ?? defaultTitle}
      titleTemplate={titleTemplate}
    />
  );
}

const query = graphql`
  query BitMetaTags {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        defaultAuthor: author
        siteName: siteName
        favicon: favicon
      }
    }
  }
`;
