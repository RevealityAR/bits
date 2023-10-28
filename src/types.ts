export interface NamedLink {
  path: string
  name: string
}

export interface NavbarConfig {
  name: string
  links: {
    [key: LangCode]: Array<NamedLink>
  }
}

export interface FooterConfig {
  [key: LangCode]: Array<NamedLink>
}

// Modern Lang types
export type LangCode = 'en' | 'fr' | 'es'
export type LangString =  Record<LangCode, string>;
export type LangReactElement = Record<LangCode, ReactString>;
export type LangRecord = Record<string, LangString>;
export type LangReactRecord = Record<string, LangReactElement>;

export interface LangSettings {
  urlPrefix: string
  humanName: string
  default?: boolean
  shortName: string
}

export type SupportedLangs = Record<LangCode, LangSettings>
export type ReactString = string | JSX.Element
export type StringList = Record<string, LangReactElement>
