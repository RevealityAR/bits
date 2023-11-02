import {
  headerCSS,
  socialIconCSS,
  socialLinksCSS,
  socialLinksMediaListCSS,
} from "./styles";
import { ReactElement } from "react";
import { Link } from "../Link";
import { useTheme } from "@emotion/react";

export interface SocialProps {
  title?: string;
  socials: { title: string; url: string; icon?: ReactElement }[];
}
export default function Social({ socials, title }: SocialProps) {
  const theme = useTheme();
  return (
    <div css={socialLinksCSS}>
      {title && <p css={headerCSS}>{title}</p>}
      <div css={socialLinksMediaListCSS}>
        {socials.map(({ title, url, icon }) => (
          <Link
            key={title}
            title={title}
            aria-label={title}
            href={url}
            target="_blank"
            sx={socialIconCSS(theme)}
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
