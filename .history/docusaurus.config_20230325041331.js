// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ARVRtise',
  tagline: 'AMA Prompt Guide',
  favicon: 'https://media.discordapp.net/attachments/1047420970371121153/1088826707739426956/ARVRtise_logo_100x100.png',

  // Set the production url of your site here
  url: 'https://arvrtise.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AMA Prompt Docs', // Usually your GitHub org/user name.
  projectName: 'AMA Prompt Guides', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          // sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'AMA Prompt Guides',
        logo: {
          alt: 'ARVRtise Logo',
          src: 'https://media.discordapp.net/attachments/1047420970371121153/1088826967123562526/cropped-ARVRTISING-ICON-512.png?width=32&height=32',
        },
        items: [
          {
            href: 'https://ama.arvrtise.com',
            label: 'AMA Bot',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Attribute',
            items: [
              {
                label: 'Made by Saahil Talha',
                to: 'https://www.linkedin.com/in/saahil-talha/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/SFm7ddSCvn',
              },
              {
                label: 'Official Website',
                href: 'https://www.arvrtise.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ARVRtise, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
