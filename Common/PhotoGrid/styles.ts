import { CSSObject } from "@emotion/react";

import { breakpointKey } from "../../src/styles/styles";
import { basicTransitionCSS } from "../../src/styles/styles";
// Thumbnail size is controled by percentage.
// flexbox space-between permits to have an even space between pictures but none on the sides (best for mobiles)
// We compute the same gap between each row based on this percentage.
// Only works properly for 3pics per row.
const $thumbSizeNormal = 32; // %
const $thumbSizeSmall = 33; // %
const $thumbsPerRow = 3;

const $backgroundColorForText = "#fafafa";
function rowMarginForThumbSize(photoSize: number): CSSObject {
  return {
    marginBottom: `${
      (100 - $thumbsPerRow * photoSize) / (-1 + $thumbsPerRow)
    }%`,

    //  margin-bottom: calc(#{100-$thumbsPerRow * $photoSize}/#{-1+$thumbsPerRow});
    // margin-bottom: calc(#{100-$thumbsPerRow * $photoSize}/#{-1+$thumbsPerRow});

    // marginBottom: `calc(#{100-${$thumbsPerRow * photoSize})%}/#{-1+${$thumbsPerRow}})`
    //marginBottom: `${100-($thumbsPerRow * photoSize) / (-1+$thumbsPerRow)}%`
  };
}

export const pageContentCSS: CSSObject = {
  backgroundColor: $backgroundColorForText,
  paddingtop: "2rem",
  paddingBottom: "2rem",
};

export const pageContainerCSS: CSSObject = {
  [breakpointKey("normal")]: {
    width: "50rem",
  },
  [breakpointKey("small")]: {
    minWidth: "90vw",
  },
  margin: "auto",
};

export const photoGridCSS: CSSObject = {
  display: "grid",
  flexDirection: "row",
  justifyContent: "stretch",
  alignContent: "stretch",
  maxWidth: "100%",
  width: "100%",
  padding: 0,
};

export const photoThumbnailCSS: CSSObject = {
  [breakpointKey("normal")]: {
    width: `${$thumbSizeNormal}%`,
    paddingTop: `${$thumbSizeNormal}%`,
  },
  [breakpointKey("small")]: {
    width: `${$thumbSizeSmall}%`,
    paddingTop: `${$thumbSizeSmall}%`,
  },

  backgroundColor: "white",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  ...basicTransitionCSS,

  "&:hover": {
    // box-shadow: inset 0 0 0px 100000px rgba(0, 0, 0, 0.2); // easy way to get a black overlay
    cursor: "pointer",
    filter: "contrast(1.2)",
    transform: "scale(1.01)",
  },
};

export const photoRowContainerCSS: CSSObject = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  [breakpointKey("normal")]: {
    ...rowMarginForThumbSize($thumbSizeNormal),
  },
  [breakpointKey("small")]: {
    ...rowMarginForThumbSize($thumbSizeSmall),
  },
};
