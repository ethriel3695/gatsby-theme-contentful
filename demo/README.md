<!-- TODO: Need to flesh this out and put in instructions on how to create a site with the theme -->

## 🚀 Quick start

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

    ### Add content through contentful

    - Create a contentful account https://www.contentful.com/get-started/
    - Select the tab `I Build Software` and Click `Try for free`
    - Enter your information and finish the signup process
    - Skip the tutorial and click directly on `Add a space`
    - Select the Free tier
    - Name your space and create an select `Create an empty space` and click `Proceed to confirmation`
    - Click `Confirm and create space`

    ### Build out Content model schema for contentful

    #### Page:

    - Name: Page
    - Api Identifier: Will autopopulate to match `Name`
    - Description: A short description to describe Content Model
    - Example: Used to specify page types for rendering on the client side
      (Landing, Post, HeroLanding, etc.)

    * Title: short Text (250 characters)
    * Page Type: Short text (250 characters) - Used to render specific page templates in the code
      - Currently supported page types: (HeroLanding, Landing)
    * Section: One to many sections can be added to a page
    * Slug: Page path for content

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

3)  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd authentication-demo &&
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── content
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── LICENSE
    ├── package-lock.json or yarn.lock
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

6.  **`LICENSE`**: Gatsby is licensed under the MIT license.

7.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

8.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

9.  **`README.md`**: A text file containing useful reference information about your project.
