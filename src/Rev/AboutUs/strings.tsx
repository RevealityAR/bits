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
    ['en']: <>Let's create together</>,
    ['fr']: <>Créons ensemble</>,
  },

  subline: {
    ['en']: (
      <>
        We’re a team of digital artists, mediators and engineers in a mission to
        unlock the creative potential of Augmented Reality.
      </>
    ),
    ['fr']: (
      <>
        Nous sommes une équipe d’artistes numériques, médiat.eur.ice.s et
        ingénieurs en mission pour débloquer le potentiel créatif de la Réalité
        Augmentée.
      </>
    ),
  },

  features: {
    ['en']: (
      <>
        We organise <strong css={boldCSS}>workshops</strong> (for all ages),{' '}
        <strong css={boldCSS}>masterclasses</strong> (for pros) and{' '}
        <strong css={boldCSS}>co-create experiences</strong> with artists and
        institutions.
      </>
    ),
    ['fr']: (
      <>
        Nous animons des <strong css={boldCSS}>ateliers</strong> (pour tous les
        âges), des <strong css={boldCSS}>formations</strong> (pour les plus
        grands) et <strong css={boldCSS}>co-produisons</strong> des expériences
        avec artistes et institutions.
      </>
    ),
  },

  contactUs: {
    ['en']: `I'm interested`,
    ['fr']: `Ça m'intéresse`,
  },
}
