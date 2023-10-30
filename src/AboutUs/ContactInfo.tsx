/** @jsxImportSource @emotion/react */
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
  return (
    <div css={contactInfosCSS}>
      <PunchlineParagraph>
        <a href={`mailto:${contactEmail}`}>{children}</a>
      </PunchlineParagraph>
    </div>
  );
}
