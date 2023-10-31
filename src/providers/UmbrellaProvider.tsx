import { Theme, ThemeProvider, Global, CSSObject } from "@emotion/react";
import { PropsWithChildren } from "react";

interface UmbrellaProps extends PropsWithChildren {
  globalStyle?: CSSObject;
  theme: Theme;
}
export default function UmbrellaProvider({
  theme,
  globalStyle,
  children,
}: UmbrellaProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      {children}
    </ThemeProvider>
  );
}
