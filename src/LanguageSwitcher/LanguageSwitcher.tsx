import Button from "@mui/material/Button";
import { containerCSS, buttonCSS } from "./styles";

export interface LanguageSwitcherProps<LangCode extends string> {
  currentLanguage: LangCode;
  languages: { name: string; langCode: LangCode }[];
  onChange: (langCode: LangCode) => void;
}
export default function LanguageSwitcher<LangCode extends string>({
  currentLanguage,
  languages,
  onChange,
}: LanguageSwitcherProps<LangCode>) {
  return (
    <div css={containerCSS()}>
      {languages.map(({ name, langCode }) => {
        const isCurrentLanguage = langCode === currentLanguage;
        return (
          <Button
            key={name}
            color={"inherit"}
            css={buttonCSS(isCurrentLanguage)}
            variant="text"
            onClick={() => {
              onChange(langCode);
            }}
          >
            {name}
          </Button>
        );
      })}
    </div>
  );
}
