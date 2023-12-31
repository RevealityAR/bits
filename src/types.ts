export interface NamedLink {
  path: string;
  name: string;
}

export interface NavbarConfig {
  name: string;
  links: {
    [key in LangCode]: NamedLink[];
  };
}

export type FooterConfig = {
  [key in LangCode]: Array<NamedLink>;
};

export type LangCode = "en" | "fr";

export interface LangSettings {
  urlPrefix: string;
  humanName: string;
  default?: boolean;
  shortName: string;
}

export type SupportedLangs = Record<LangCode, LangSettings>;
export type ReactString = string | JSX.Element;
export type StringList = Record<string, Record<LangCode, ReactString>>;
