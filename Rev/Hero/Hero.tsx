import React from "react";
import {
  responsiveContainerCSS,
  responsiveContainerInsideCSS,
  mainVideoCSS,
  joinBetaCallCSS,
  punchlineParagraphCSS,
  punchlineCSS,
  logoAndVideoContainerCSS,
  logoContainerCSS,
  badgeContainerCSS,
  mainViewCSS,
  mainViewInsideCSS,
  mainVideoContainerCSS,
  contactInfosCSS,
} from "./styles";
import { strings } from "./strings";
import { LangCode } from "../../src/types";
import RevealityLogo from "../RevealityLogo/RevealityLogo";
import AppStoreBadges from "../AppStoreBadges/AppStoreBadges";
import demoVideo from "./../../../pages/home.webm";
import demoVideoSafari from "./../../../pages/home.mp4";
import { useTheme } from "@mui/material";
// const punchline = {
//   en: (
//     <div css={}>
//       I'm
//       <b> Maxime.</b> I work on <b css={{ color: '#588CF6' }}>digital art</b>{' '}
//       experiences and I build <b css={{ color: '#ad206d' }}>software</b> for
//       digital artists and cultural institutions.
//     </div>
//   ),
//   fr: (
//     <div css={}>
//       Moi c'est
//       <b> Maxime.</b> Je crée des expériences{' '}
//       <b css={{ color: '#588CF6' }}> d'art numérique</b> et je développe des{' '}
//       <b css={{ color: '#ad206d' }}>logiciels</b> pour les artistes et
//       institutions culturelles.
//     </div>
//   ),
// }

interface OwnProps {
  langCode: LangCode;
}
export default function Hero({ langCode }: OwnProps) {
  const theme = useTheme();
  return (
    <div css={mainViewCSS}>
      <div css={mainViewInsideCSS}>
        <div css={logoAndVideoContainerCSS}>
          <div css={logoContainerCSS}>
            <RevealityLogo />
          </div>

          <h1 css={punchlineCSS}>{strings["punchline"][langCode]}</h1>
          <p css={punchlineParagraphCSS}>{strings["subline"][langCode]}</p>
          <p></p>
          <div css={badgeContainerCSS}>
            <h3 css={joinBetaCallCSS(theme)}>
              {strings["downloadApp"][langCode]}
            </h3>
            <AppStoreBadges />
          </div>

          <div css={contactInfosCSS}>
            <p css={punchlineParagraphCSS}>
              {strings["aProject"][langCode]}{" "}
              <a href="mailto:contact@reveality.io">
                {strings["reachUs"][langCode]}
              </a>
            </p>
          </div>
        </div>

        <div></div>

        <div css={mainVideoContainerCSS}>
          <video autoPlay muted loop playsInline css={mainVideoCSS}>
            <source src={demoVideo} type="video/webm" />
            <source src={demoVideoSafari} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
