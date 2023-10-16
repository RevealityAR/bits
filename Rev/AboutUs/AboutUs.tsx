import React from "react";
import {
  contactInfosCSS,
  mainViewCSS,
  punchlineCSS,
  punchlineParagraphCSS,
  responsiveContainerInsideCSS,
} from "./styles";
import { strings } from "./strings";
import { LangCode } from "../../src/types";
import { useTheme } from "@mui/material";

interface OwnProps {
  langCode: LangCode;
}
export default function AboutUs({ langCode }: OwnProps) {
  const theme = useTheme();
  return (
    <div css={mainViewCSS}>
      <div css={responsiveContainerInsideCSS}>
        <h2 css={punchlineCSS}>{strings["punchline"][langCode]}</h2>
        <p css={punchlineParagraphCSS}>{strings["subline"][langCode]}</p>

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
