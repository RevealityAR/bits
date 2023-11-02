import { useTheme } from "@emotion/react";
import PunchlineParagraph from "./PunchlineParagraph";
import { contactInfosCSS } from "./styles";
import type { ReactNode } from "react";
import { Link } from "../Link";

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
        <Link href={`mailto:${contactEmail}`}>{children}</Link>
      </PunchlineParagraph>
    </div>
  );
}
