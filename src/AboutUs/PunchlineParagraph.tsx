import { punchlineParagraphCSS } from "./styles";
import type { ReactNode } from "react";

interface PunchlineParagraphProps {
  children: ReactNode;
}
export default function PunchlineParagraph({
  children,
}: PunchlineParagraphProps) {
  return <p css={punchlineParagraphCSS}>{children}</p>;
}
