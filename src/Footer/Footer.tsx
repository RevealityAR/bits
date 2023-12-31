import { Link } from "../Link";
import { subSectionCSS, linksCSS, containerCSS } from "./styles";
import { Interpolation, Theme } from "@emotion/react";
import { NamedLink } from "../types";
import { Newsletter, NewsletterProps } from "../Newsletter";
import { SocialProps, Socials } from "../Socials";
import { Contact, ContactProps } from "../Contact";
import { Box } from "@mui/material";

export interface FooterProps {
  contact?: ContactProps;
  socials?: SocialProps;
  customLinks?: Array<NamedLink>;
  css?: Interpolation<Theme>;
  newsletter?: NewsletterProps;
}
export default function Footer({
  contact,
  socials,
  customLinks,
  css,
  newsletter,
}: FooterProps) {
  return (
    <div css={[css, containerCSS]}>
      {newsletter && <Newsletter {...newsletter} />}

      {socials && (
        <div css={subSectionCSS}>
          <Socials {...socials} />
        </div>
      )}

      {contact && (
        <div css={subSectionCSS}>
          <Contact {...contact} />
        </div>
      )}

      <div css={linksCSS}>
        {customLinks?.map((link) => (
          <Box css={{ marginLeft: "0.5em", marginRight: "0.5em" }}>
            <Link key={link.path} href={link.path}>
              {link.name}
            </Link>
          </Box>
        ))}
      </div>
      <p>Copyright 2023 Reveality</p>
    </div>
  );
}
