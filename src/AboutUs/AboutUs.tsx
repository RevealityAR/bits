/** @jsxImportSource @emotion/react */
import { mainViewCSS, responsiveContainerInsideCSS } from "./styles";
import type { ReactNode } from "react";

interface OwnProps {
  children: ReactNode;
}
export default function AboutUs({ children }: OwnProps) {
  return (
    <div css={mainViewCSS}>
      <div css={responsiveContainerInsideCSS}>{children}</div>
    </div>
  );
}
