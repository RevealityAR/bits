/** @jsxImportSource @emotion/react */
import { useStaticQuery, graphql } from "gatsby";
import { NamedLink } from "../types";
import FooterComponent from "./Footer";

interface FooterProps {
  customLinks: Array<NamedLink>;
}
export function Footer({ customLinks }: FooterProps) {
  const {
    site: {
      siteMetadata: {
        author,
        authorMail,
        socialLinks: {
          twitter,
          facebook,
          instagram,
          vimeo,
          youtube,
          github,
          soundcloud,
        },
      },
    },
  } = useStaticQuery<{
    site: {
      siteMetadata: {
        author?: string;
        authorMail?: string;
        socialLinks: {
          twitter: string;
          facebook: string;
          instagram: string;
          vimeo: string;
          youtube: string;
          github: string;
          soundcloud: string;
        };
      };
    };
  }>(query);

  return (
    <FooterComponent
      customLinks={customLinks}
      author={author}
      authorMail={authorMail}
      twitter={twitter}
      facebook={facebook}
      instagram={instagram}
      vimeo={vimeo}
      youtube={youtube}
      github={github}
      soundcloud={soundcloud}
    />
  );
}

const query = graphql`
  query BitFooter {
    site {
      siteMetadata {
        author
        authorMail
        socialLinks {
          twitter
          facebook
          instagram
          vimeo
          youtube
          github
          soundcloud
        }
      }
    }
  }
`;
