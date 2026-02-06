import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import path from "path";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Riverr GraphQL API",
  tagline: "API Reference and Documentation",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://someshwarpatil.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/riverr-graphql-openapi/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Riverr", // Usually your GitHub org/user name.
  projectName: "riverr-graphql-openapi", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@graphql-markdown/docusaurus",
      {
        schema: path.resolve(__dirname, "schema.graphql"),
        rootPath: path.resolve(__dirname, "docs"),
        baseURL: "reference",
        homepage: path.resolve(__dirname, "index.md"),
        linkRoot: "/docs",
        loaders: {
          GraphQLFileLoader: "@graphql-tools/graphql-file-loader",
        },
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Riverr API",
      logo: {
        alt: "Riverr Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/docs/reference",
          label: "API Reference",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "API Reference",
              to: "/docs/reference",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Riverr. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
