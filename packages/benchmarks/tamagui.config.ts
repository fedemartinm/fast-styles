import { themes, tokens } from "@tamagui/themes";

import { createInterFont } from "@tamagui/font-inter";
import { createTamagui } from "tamagui";

const font = createInterFont();

export const appConfig = createTamagui({
  themes,
  tokens,
  fonts: {
    heading: font,
    body: font,
  },
});

export type AppConfig = typeof appConfig;

declare module "tamagui" {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
