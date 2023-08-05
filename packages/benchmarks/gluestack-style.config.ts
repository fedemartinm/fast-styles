import { createConfig } from "@gluestack-style/react";

export const gluestackConfig = createConfig({
  aliases: {
    bg: "backgroundColor",
    bgColor: "backgroundColor",
    rounded: "borderRadius",
    h: "height",
    w: "width",
  },
  tokens: {
    colors: {
      primary0: "#ffffff",
      primary400: "#c084fc",
      primary500: "#a855f7",
      primary600: "#9333ea",
    },
    space: {
      4: 16,
      5: 20,
      6: 24,
    },
    radii: {
      sm: 4,
      md: 6,
    },
    letterSpacings: {
      md: 0,
    },
    lineHeights: {
      sm: 20,
      md: 22,
    },
    fontWeights: {
      normal: "400",
      medium: "500",
    },
    fontSizes: {
      sm: 14,
      md: 16,
    },
    mediaQueries: {
      sm: "@media (min-width: 480px)",
      md: "@media (min-width: 768px)",
    },
  },
  globalStyle: {
    variants: {
      shadow: {
        softShadow: {
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 10,
          shadowOpacity: 0.1,
          _android: {
            shadowColor: "$primary500",
            elevation: 5,
            shadowOpacity: 0.05,
          },
        },
      },
    },
  },
} as const);

// Get the type of Config
type ConfigType = typeof gluestackConfig;

// Extend the internal styled config
declare module "@gluestack-style/react" {
  interface ICustomConfig extends ConfigType {}
}
