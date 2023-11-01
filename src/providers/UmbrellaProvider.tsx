import { Theme, ThemeProvider, Global, CSSObject } from "@emotion/react";
import { PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";
import type { i18n } from "i18next";

interface UmbrellaProps extends PropsWithChildren {
  globalStyle?: CSSObject;
  theme: Theme;
  i18n: i18n;
}
export default function UmbrellaProvider({
  theme,
  globalStyle,
  children,
  i18n,
}: UmbrellaProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyle} />
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
}
