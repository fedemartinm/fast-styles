// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fast Styles",
  tagline: "A lightweight and efficient React Native styling package",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://fedemartinm.github.io",
  baseUrl: "/fast-styles/",
  organizationName: "fedemartinm",
  projectName: "fast-styles",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "beta",
        content:
          "<b>🎉 We need your help to shape it for production! Test and share feedback to make it even better. 🙌<b/>",
        backgroundColor: "#ffc72c",
        textColor: "#black",
        isCloseable: true,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: "img/fast-styles-social-card.png",
      navbar: {
        title: "Fast Styles",
        logo: {
          alt: "Fast Styles",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "mainSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/fedemartinm/fast-styles",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Getting Started",
            items: [
              {
                label: "Installation",
                to: "/docs/basics/installation",
              },
              {
                label: "Basics",
                to: "/docs/category/basics",
              },
              {
                label: "Advanced",
                to: "/docs/category/advanced",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Fast Components",
                to: "/docs/more/fast-components",
              },
              {
                label: "Why this library?",
                to: "/docs/basics/why-this-library",
              },
              {
                label: "Philosophy",
                to: "/docs/advanced/philosophy",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/fedemartinm/fast-styles",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
