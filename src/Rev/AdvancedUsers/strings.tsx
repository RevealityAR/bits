import React from 'react'
import { StringList } from '../../types'
import { CSSObject } from '@emotion/react'

const boldCSS: CSSObject = {
  color: '#2771cc',
}
const boldLightCSS: CSSObject = {
  color: '#649DE5',
}

export const strings: StringList = {
  punchline: {
    ['en']: (
      <>
        Made by and for <strong css={boldCSS}>digital artists</strong>
      </>
    ),
    ['fr']: (
      <>
        Fait par et pour les <strong css={boldCSS}>artistes numériques</strong>
      </>
    ),
  },

  subline: {
    ['en']: (
      <>
        The Reveality toolkit streamlines production and enhances creative
        possibilities.
        <br />
        Augmented-Reality features are ready-to-go and shared between artists.
        <br />
        Works with your Unity projecs.
        <br />
        Spend less time coding, more time creating.
      </>
    ),
    ['fr']: (
      <>
        La boite à outils Reveality simplifie la production et décuple les
        possibilités créatives.
        <br />
        Les fonctionnalités de Réalité Augmentée sont prêtes à l'emploi et
        mutualisées entre artistes.
        <br />
        Compatible avec vos projets Unity.
        <br />
        Passez moins de temps à coder, plus à créer.
      </>
    ),
  },

  features: {
    ['en']: (
      <>
        <strong>Features</strong>
        <br />
        AI production tools (mocap, detouring, volumetric)
        <br />
        Diffusion modes (marker-based, markerless, location based)
        <br />
        Media templates (transparent video, 360° spheres, audio)
        <br />
        Real-time effects (color grading, event-based editing)
        <br />
        User interaction tools (photo & video capture)
        <br />
        And more to invent together?
      </>
    ),
    ['fr']: (
      <>
        <strong>Fonctionnalités</strong>
        <br />
        Outils de production par IA (mocap, détourage, volumétrie)
        <br />
        Modes de diffusion (marker-based, markerless, location based)
        <br />
        Templates de médias (vidéo transparente, sphères 360°, audio)
        <br />
        Effets en temps réel (étalonnage, déclenchements intéractifs)
        <br />
        Outils d'interaction utilisateur (enregistrement photo & vidéo)
        <br />
        et plus à inventer ensemble ?
      </>
    ),
  },

  contactUs: {
    ['en']: `Invite us for a residency`,
    ['fr']: `Nous inviter en résidence`,
  },
}
