/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import PunchlineParagraph from "./PunchlineParagraph";
import { contactInfosCSS } from "./styles";
import type { ReactNode } from "react";

interface ContactInfoProps {
  contactEmail: string;
  children: ReactNode;
}
export default function ContactInfo({
  contactEmail,
  children,
}: ContactInfoProps) {
  const theme = useTheme();
  return (
    <div css={contactInfosCSS(theme)}>
      <PunchlineParagraph>
        <a href={`mailto:${contactEmail}`}>{children}</a>
      </PunchlineParagraph>
    </div>
  );
}
