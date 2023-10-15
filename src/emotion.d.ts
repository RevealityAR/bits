import "@emotion/react";
import { Theme as ThemeMaterial } from "@mui/material/styles";

declare module "@emotion/react" {
  export interface Theme extends ThemeMaterial {}
}
