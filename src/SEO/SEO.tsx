export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  article?: boolean;
  author?: string;
  langCode?: string;
  useRobotoFont?: boolean;
  siteName?: string;
  favicon?: string;
  titleTemplate?: string;
}
export default function SEO({
  title,
  description,
  image,
  url,
  author,
  article,
  langCode = "fr",
  useRobotoFont = false,
  siteName,
}: SEOProps) {
  return (
    <>
      {title && <title>{title}</title>}
      <meta name="robots" content="all" />
      <meta name="viewport" content="user-scalable=yes, width=device-width" />
      {description && <meta name="description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content={article ? "article" : "website"} />
      {article && author && (
        <meta property="og:article:author" content={author} />
      )}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:secure_url" content={image} />}
      {image && <meta property="og:image:type" content="image/jpeg" />}
      {siteName && <meta property="og:site_name" content={siteName} />}

      <meta http-equiv="cache-control" content="Private" />
      <meta http-equiv="Expires" content="0" />

      {useRobotoFont ?? (
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </>
      )}

      <html lang={langCode} />
    </>
  );
}
