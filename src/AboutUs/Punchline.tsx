import { punchlineCSS } from "./styles";
import type { ReactNode } from "react";

interface PunchlineProps {
  children: ReactNode;
}
export default function Punchline({ children }: PunchlineProps) {
  return <h2 css={punchlineCSS}>{children}</h2>;
}
