# Gatsby Theme Authentication Enabled Auth0

This is theme which incorporates Auth0, Material-UI for styling components and a sidebar navigation.

See the [live demo](https://sleepy-haibt-f5d703.netlify.com/)

## Quick Start

1.  Use the auth app starter

    ```sh
    gatsby new my-auth-app https://github.com/ethriel3695/gatsby-theme-auth-app
    ```

## Create Project

1. Create a project folder in the demo directory C:/source/demo
2. Through the console type `cd [projectName]`
3. Create a package.json

```json
// package.json
{
  "private": false,
  "name": "demo",
  "version": "0.1.0",
  "license": "MIT",
  "scripts": {
    "build": "gatsby build",
    "develop": "rimraf ./.cache && rimraf ./public && gatsby develop",
    "format": "prettier --write src/**/*.{js,jsx}",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\""
  }
}
```

4. Through the console type

```sh
npm i gatsby gatsby-theme-auth-app react react-dom
```

5. Create a `content` folder in the `root` directory
6. Create an `assets` folder in the `content` directory
7. Create a `post` folder in the `content` directory

## Assets

If you want to add a hero image:

1. Create a `hero` folder and add an image to the folder

If you want a logo:

1. Create a `logo` folder and add your logo named `logo.[fileExtension]`

## Post Creation

`NOTE:` Iterate the post folders for example 01, 02, 03
Folder structure `01/images/[image]`, `[postName].mdx`

## MDX file requirements

---

slug: /routeName
label: Route Label for Nav
title: Title of Post
description: Description of Post
date: Created Date
categories: ["react", "node"]
banner: "./images/hero.jpg"
published: true

---

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save gatsby-theme-auth-app
    ```

### Theme options

| Key           | Default value     | Description                                                                                               |
| ------------- | ----------------- | --------------------------------------------------------------------------------------------------------- |
| `basePath`    | `/`               | Root url for all blog posts                                                                               |
| `contentPath` | `/content/post`   | Location of blog posts                                                                                    |
| `excelPath`   | `/content/excel`  | Use excel data to generate page content                                                                   |
| `assetPath`   | `/content/assets` | Location of assets                                                                                        |
| `mdx`         | `true`            | Configure `gatsby-plugin-mdx` (if your website already is using the plugin pass `false` to turn this off) |

### Additional configuration

In addition to the theme options, there are a handful of items you must modify via the `siteMetadata` object in your site's `gatsby-config.js`

The Social tags, if left as an empty string will not appear in the footer

The External Links accept a label as the text for the a tag and the link is the value for the href attribute

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-auth-app',
      options: {},
    },
  ],
  siteMetadata: {
    title: `Demo`,
    author: `Reuben Ellis`,
    description: `An Authentication Site Built with Gatsby, GraphQL, Material-UI and Auth0.`,
    greeting: `This is an optional greeting for a home page with a Hero image`,
    copyright: `Copyright © 2019 [Business] - No part of this website may be reproduced without specific written permission... Just Kidding Copy Away!!!`,
    loginDesc: 'Login / Signup',
    isAuthApp: false,
    social: {
      facebook: 'https://www.facebook.com/altcampus',
      twitter: 'https://www.twitter.com/altcampus',
      github: 'https://www.github.com/[githubUserName]',
      email: 'test@example.com',
    },
    externalLinks: [{ label: '', link: '' }],
  },
};
```

### Only if isAuthApp is set to true in the gatsby-config file

1. Create An `env.development` file to hold your environment variables
2. In addition replace the values in the site's `env.development` file with the correct values from your Auth0 account.
   If you do not have an Auth0 account create one for free [Auth0](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22button%22%7D)

```js
// env.development
GATSBY_AUTH0_DOMAIN = domain.auth0.com; // Replace domain with your auth0 domain
GATSBY_AUTH0_CLIENT_ID = secret_client_id; // This ID can be found after creating an Application within Auth0 within the Application tab
GATSBY_AUTH0_CALLBACK_URL = `http://localhost:8000/callback`; //Remove the literal string character when replacing the callback url
GATSBY_AUTH0_REDIRECT_URL = `http://localhost:8000`; //Remove the literal string character when replacing the callback url
```

1.  **`/content`**: A content folder holding assets that the theme expects to exist. This will vary from theme to theme -- this starter expects a logo directory with either a png, jpg or svg image, a post directory for content and mdx files and a data directory for JSON files. **`NOTE`** If the logo directory is empty the theme will use the title attribute in the **`gatsby-config.js`** file.

2.  **`/src`**: You will probably want to customize your site to personalize it. The files under `/src/gatsby-theme-auth-app` _shadow_, or override, the files of the same name in the `gatsby-theme-auth-app` package. To learn more about this, check out the [guide to getting started with using the blog theme starter](http://gatsbyjs.org/docs/themes/using-a-gatsby-theme).

**`Example`**: `src/gatsby-theme-auth-app/components/layout.css` and then edit the following hex values for color scheme changes:

```css
.appHeader {
  background: linear-gradient(
    to bottom,
    #325da7 0%,
    #325da7 19%,
    #325da7 30%,
    #325da7 100%
  );
  box-shadow: inset 0 1px 6px 0 #325da7;
  flex-grow: 1;
  margin: auto 0;
}

.fontAwesomeFooterIcon {
  color: #325da7;
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
  color: #325da7;
  font-size: 18px;
  margin: 1rem 1rem;
  text-decoration: none;
  text-shadow: 2px 2px #dddddd;
}
```

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This file tells [Prettier](https://prettier.io/) which configuration it should use to lint files.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. When using themes, it's where you'll include the theme plugin, and any customization options the theme provides.

6.  **`LICENSE`**: Gatsby is licensed under the MIT license.

7.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9.  **`README.md`**: A text file containing useful reference information about your project.
