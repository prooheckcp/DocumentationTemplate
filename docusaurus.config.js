// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

//Some constants
const REPO_NAME = "rep"
const PROFILE_NAME = "proohekcp"

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Library Name',
  tagline: 'Library description',
  url: 'https://your-docusaurus-test-site.com', //Change to website link
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: PROFILE_NAME,
  projectName: REPO_NAME, // Change to the repo name

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      (
        {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/prooheckcp/REPO_NAME/tree/main/', //Change REPO_NAME to repository name
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
      navbar: {
        title: 'Home', //Change this to website title
        logo: {
          alt: 'My Site Logo',
          src: 'img/PageLogo.png', //Path to the logo on the search bar
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: `https://github.com/${PROFILE_NAME}/${REPO_NAME}`,
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Prooheckcp name logo',
          src: 'img/prooheckcp.png',
          href: 'https://prooheckcp.com',
          width: 160,
          height: 51,
        },
        links: [
          {
            label: '📹Youtube',
            href: 'https://www.youtube.com/prooheckcp',
          },
          {
            label: '🏰Discord',
            href: 'https://discord.com/invite/2ddmryH',
          },
          {
            label: '🐦Twitter',
            href: 'https://twitter.com/prooheckcp',
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Prooheckcp`
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: lightCodeTheme,
      },
    }),
};

module.exports = config;
