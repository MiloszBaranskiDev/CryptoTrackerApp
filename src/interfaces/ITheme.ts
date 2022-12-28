import { EThemeColorKey } from "enums/EThemeColorKey";

export interface ITheme {
  colors: {
    [key in EThemeColorKey]: string;
  };
}
