process.env.TAMAGUI_TARGET = "native";
//const gluestackStyleResolver = require("@gluestack-style/babel-plugin-styled-resolver");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@fast-styles/babel-plugin",
      /*   [
        "@tamagui/babel-plugin",
        {
          components: ["benchmarks"],
          config: "./tamagui.config.ts",
          importsWhitelist: ["tamagui.tsx"],
          logTimings: true,
          disableExtraction: false,
        },
      ],
      [
        "transform-inline-environment-variables",
        {
          include: ["TAMAGUI_TARGET"],
        },
      ], */
    ],
  };
};
