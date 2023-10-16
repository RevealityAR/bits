import React from "react";
import {
  contactInfosCSS,
  mainViewCSS,
  punchlineCSS,
  punchlineParagraphCSS,
  clientLogoCSS,
  clientsLogoGridCSS,
  imageBackgroundCSS,
  responsiveContainerInsideCSS,
} from "./styles";
import { strings } from "./strings";
import { LangCode } from "../../src/types";
import { ADVANCED_LOGOS } from "../../../logos";
import { useTheme } from "@mui/material";

interface OwnProps {
  langCode: LangCode;
}
export default function AdvancedUsers({ langCode }: OwnProps) {
  const theme = useTheme();
  return (
    <div css={mainViewCSS}>
      <div css={responsiveContainerInsideCSS}>
        <h2 css={punchlineCSS}>{strings["punchline"][langCode]}</h2>
        <p css={punchlineParagraphCSS}>{strings["subline"][langCode]}</p>

        <div css={clientsLogoGridCSS}>
          {ADVANCED_LOGOS.map((logo) => {
            return (
              <a
                key={logo.siteUrl}
                css={{
                  ...clientLogoCSS,
                  ...imageBackgroundCSS(logo.imageUrl),
                  transform: `scale(${logo.scale ? logo.scale : 1})`,
                }}
                target="_blank"
                rel="noreferrer noopener"
                href={logo.siteUrl}
              />
            );
          })}
        </div>

        <p css={punchlineParagraphCSS}>{strings["features"][langCode]}</p>

        <div css={contactInfosCSS}>
          <p css={punchlineParagraphCSS}>
            <a href="mailto:contact@reveality.io">
              {strings["contactUs"][langCode]}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
