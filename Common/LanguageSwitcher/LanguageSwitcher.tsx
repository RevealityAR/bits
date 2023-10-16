import React from "react";
import { Link } from "gatsby";
import { supportedLangs } from "../../../locales/locales";
import { LangCode } from "../../src/types";
import { useTheme } from "@emotion/react";
import { containerCSS } from "./styles";

const updateDefaultLanguage = (defaultLanguage: LangCode): void => {
  // console.log('update language to ', defaultLanguage)
  window.localStorage.setItem("language", defaultLanguage);
};

interface OwnProps {
  currentLangCode: LangCode;
  currentUrl: string;
}
export default function LanguageSwitcher({
  currentLangCode,
  currentUrl,
}: OwnProps) {
  const theme = useTheme();
  // Compute current language from URL directly
  return (
    <div css={containerCSS}>
      {Object.keys(supportedLangs).map((langCode: string, index: number) => {
        // alert(this.props.currentUrl);
        const baseUrl = currentUrl
          .replace(supportedLangs[currentLangCode].urlPrefix, "") // Remove language prefix
          .replace("//", "/"); // Avoid possible double slash
        return (
          <Link
            key={index}
            to={baseUrl}
            onClick={() => {
              updateDefaultLanguage(langCode as LangCode);
            }}
          >
            {supportedLangs[langCode].humanName}
          </Link>
        );
      })}
    </div>
  );
}
