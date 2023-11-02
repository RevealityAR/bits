import { Link } from "../Link";
import { contactCSS } from "./styles";
import { useTheme } from "@emotion/react";

export interface ContactProps {
  title?: string;
  mail: string;
}
export default function Contact({ title, mail }: ContactProps) {
  const theme = useTheme();
  return (
    <div css={contactCSS(theme)}>
      {title && <p>{title}</p>}
      <Link href={`mailto:${mail}`}>{mail}</Link>
    </div>
  );
}
