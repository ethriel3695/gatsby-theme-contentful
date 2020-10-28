# Gatsby Theme Contentful

## Currently supported functionality:

1. Auth0 - For authentication if the flag `isAuthApp` is set to true
2. Material-UI - For pre-built components and easy styling of an application
3. Theme-UI - Used with gatsby for theme level styling and a compliment to Material-UI
4. MDX - For page rendering based on markdown content (Files are added to `/content` directory)
5. Contentful - A headless CMS so content can be added by non-developers for articles and widget rendering

## Current Limitations

1. Contentful currently requires a placholder Image on one section

- You can just add a section named Placeholder Content with an Image and the CMS will load correctly

- The data schema is as follows:

#### Page:

- Title: short Text (250 characters)
- Page Type: Short text (250 characters) - Used to render specific page templates in the code
  - Currently supported page types: (HeroLanding, Landing)
- Section: One to many sections can be added to a page
- Slug: Page path for content

#### Section:

- Title: short Text (250 characters)
- Description: rich text
- Slug: Page path for section
- Order: The order that content appears on the page (Ascending)
- Item: One to many items can be added to a section
- Image: Media (Not required)

#### Item: (Curently only renders as a button)

##### Future Functionality: Change to a widget and render content and components dynamically

- Title: Short Text (250 characters)
- Sub Header: Short Text (250 characters)
- Link: External links to other websites
- Slug: Path to one of the dynamically generated pages (MDX currently)

## Quick start

1.  **Create an Authenticated Site**

    In order to get an authentication enabled site up and going follow these steps:

    - Open a terminal of your choice **(Terminal on mac, Command Prompt, Powershell or Bash on Windows)**
    - Navigate to the directory where you store your repositories

    - Example:

      ```sh
      cd Users/[username]/source
      ```

    - Clone the authentication demo
      ```sh
       git clone https://github.com/ethriel3695/authentication-demo
      ```

2.  **Open the source code and start editing!**

    - Open the `authentication-demo` directory in your code editor of choice

    ### Add content through mdx

    - Create a `content` folder
    - Create a `post` folder
    - Create a folder such as `firstPost`
    - Create an images folder
    - Add an image in either `png`, `jpg` or `webp` format
    - Create an `mdx` file `firstPost.mdx`

## Create Project Manually

1. Create a project folder in your repository directory `mkdir [projectName]`
2. Through the command line type `cd [projectName]`
3. Create a package.json

```json
// package.json
{
  "private": true,
  "name": "demo",
  "version": "0.1.0",
  "license": "MIT",
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby clean && gatsby develop",
    "format": "prettier --write src/**/*.{js,jsx}",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\""
  },
  "dependencies": {
    "gatsby": "^2.19.12",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "gatsby-theme-contentful": "^0.0.16"
  },
  "devDependencies": {
    "prettier": "^1.19.1"
  }
}
```

4. Through the command line

```sh
npm i gatsby gatsby-theme-contentful react react-dom
```

## Additional configuration

In addition to the theme options, there are a handful of items you must modify via the `siteMetadata` object in your site's `gatsby-config.js`

The Social tags, if left as an empty string will not appear in the footer

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-contentful',
      options: {},
    },
  ],
  siteMetadata: {
    title: `Site Title`,
    author: `Name of the Site Creator`,
    description: `Site Description`,
    greeting: `A more detailed description or greeting for the home page`,
    copyright: `Copyright message unique to site or company`,
    loginDesc:
      'If isAuthApp then this is the name of the button to login (ex: Login, Login / Signup)',
    isAuthApp: false, // default is true (If true, enables authentication)
    newsletterTitle: 'Text description of the newsletter button', // If empty no newsletter shows up in Header
    social: {
      facebook: 'altcampus',
      twitter: 'altcampus',
      github: 'ethriel3695',
      email: 'test@example.com',
    },
    externalLinks: [{ label: 'Google', link: 'https://www.google.com' }],
  },
};
```

## Authentication

Authentication now works out of the box if you provide the credentials in the `.env.development` and `.env.production` files
Also, in `gatsby-config.js` the `isAuthApp` key needs to be set to `true`

## Content directories

| Key           | Default value                | Description                                                                                                 |
| ------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentPath` | `/content/post`              | Directory for article posts                                                                                 |
| `assetPath`   | `/content/assets`            | Location of assets                                                                                          |
| `logo`        | `/content/assets/logo`       | An image in the logo directory will replace the title in the header with a brand logo instead               |
| `newsletter`  | `/content/assets/newsletter` | A pdf in this directory will provide a static asset for a newsletter with the newsletter link in the header |
| `files`       | `/content/assets/files`      | A directory to store files for use across the website                                                       |
| `mdx`         | `true`                       | MDX renders the additional pages in the site currently and will be used in the future alongside contentful  |

## Page/Post Creation MDX

`NOTE:` Folder structure `samplePost/images/[image]`, `samplePost.mdx`

## MDX file requirements

```mdx
---
slug: /sample
label: Navigation Text
title: Title of post
description: Description of post
date: Date post is written (Ex. 2020-02-07) (Not Required)
categories: ['react', 'node'] (Not currently rendered but in progress)
published: true
---
```

## Page/Post Creation with Contentful

You can now create a Page in contentful and the page/post will be generated in the application

`gatsby-node` object

```
allContentfulPage {
  nodes {
    title
    pageType
    slug
    section {
      id
      order
      title
      image {
        description
        fluid(maxWidth: 1904) {
          src
          srcSet
          srcSetWebp
          sizes
        }
      }
      description {
        json
      }
      item {
        title
        subHeader
        link
        slug
      }
    }
  }
}
```

## Environment variables

1. Create An `env.development` file to hold your environment variables
2. `env.production` to test when running `npm run build && npm run serve`
3. If you do not have an Auth0 account create one for free [Auth0](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22button%22%7D)

```js
// env.development
// Auth0 variables required only if isAuthApp set to true in gatsby-config.js
AUTH0_DOMAIN = domain.auth0.com; // Replace domain with your auth0 domain
AUTH0_CLIENT_ID = secret_client_id; // This ID can be found after creating an Application within Auth0 within the Application tab

// Google Maps variables required only if you want to use the map
GATSBY_GOOGLE_MAPS_API_KEY = `Google maps api key`;
GATSBY_GOOGLE_LATITUDE = `Latitude position to render map marker`;
GATSBY_GOOGLE_LONGITUDE = `Longitude position to render map marker`;
GATSBY_GOOGLE_MAP_DESC = `Description of map marker`;

// Google calendar url if you want to embed the calendar
GATSBY_GOOGLE_CALENDAR_URL = `https://calendar.google.com/calendar/embed?src=[emailTextBefore@symbol]%40gmail.com&ctz=America%2FBoise`;

// Contentful credentials if you want to use contentful
CONTENTFUL_SPACE_ID = `space id from contentful`;
CONTENTFUL_ACCESS_TOKEN = `special token from contentful`;

GATSBY_FORM_API = `URL for submitting form contents REST API`;
GATSBY_FORM_GET_API = `URL for getting form contents REST API`;
GOOGLE_ANALYTICS_ID = `Google Analytics ID`;
```

```jsx
// Example of using google map
import GoogleMaps from 'gatsby-theme-contentful/src/components/Maps/RegularGoogleMap';

<GoogleMaps />;
```

```jsx
// Example of using google calendar
import GoogleCalendar from 'gatsby-theme-contentful/src/components/Calendar/GoogleCalendar';

<GoogleCalendar />;
```

**`/src`**: You will probably want to customize your site to personalize it. The files within `/src/gatsby-theme-contentful` _shadow_, or override, the files of the same name in the `gatsby-theme-contentful` package.
To learn more about this, check out the [guide to getting started with using the blog theme starter](http://gatsbyjs.org/docs/themes/using-a-gatsby-theme).

**`Example`**: `src/gatsby-theme-acontentful/components/layout.css` and then edit the following hex values for color scheme changes:

```css
html,
body {
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
}

.appHeader {
  background: linear-gradient(
    to bottom,
    #02075d 0%,
    #02075d 19%,
    #02075d 30%,
    #02075d 100%
  );
  box-shadow: inset 0 1px 6px 0 #040daf;
  flex-grow: 1;
  margin: auto 0;
}

.fontAwesomeFooterIcon {
  color: #040daf;
  cursor: pointer;
  text-decoration: none;
  text-shadow: 2px 2px #282828;
}

.socialLink {
  cursor: pointer;
  font-size: 25px;
  margin: 1rem 1rem;
  text-decoration: none;
}

.externalLink {
  color: #040daf;
  font-size: 18px;
  margin: 1rem 1rem;
  text-decoration: none;
  text-shadow: 2px 2px #dddddd;
}
```

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

2.  **`.prettierrc`**: This file tells [Prettier](https://prettier.io/) which configuration it should use to format files.

3.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. When using themes, it's where you'll include the theme plugin, and any customization options the theme provides.

4.  **`LICENSE`**: Gatsby is licensed under the MIT license.
