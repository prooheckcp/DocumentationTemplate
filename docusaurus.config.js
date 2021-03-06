// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

//Some constants
const REPO_NAME = "DocumentationTemplate"
const PROFILE_NAME = "proohekcp"

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],

  title: 'My Library Name',
  tagline: 'Library description',
  url: 'https://prooheckcp.github.io', //Change to website link
  baseUrl: '/DocumentationTemplate/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'proohekcp',
  projectName: 'DocumentationTemplate', // Change to the repo name
  trailingSlash: false,

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
            `https://github.com/${PROFILE_NAME}/${REPO_NAME}/tree/main/`, //Change REPO_NAME to repository name
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
      image: "img/Thumbnail.png",
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: 'Home', //Change this to website title
        hideOnScroll: true,
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
          },
          {
            type: 'search',
            position: 'right',
          },          
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
            label: '????Youtube',
            href: 'https://www.youtube.com/prooheckcp',
          },
          {
            label: '????Discord',
            href: 'https://discord.com/invite/2ddmryH',
          },
          {
            label: '????Twitter',
            href: 'https://twitter.com/prooheckcp',
          },
          {
            label: '????GitHub',
            href: 'https://github.com/prooheckcp',
          }
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Prooheckcp`
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'lua']
      },
    }),
};

module.exports = config;
