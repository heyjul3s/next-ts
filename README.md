# Next TS

A typescript powered NextJS boilerplate with ChakraUI and RecoilJS.

| Dependency                                                       | Version | Use              |
| ---------------------------------------------------------------- | ------- | ---------------- |
| [@axe-core/react](https://www.npmjs.com/package/@axe-core/react) | 4.2.1   | Accessibiliy     |
| [@chakra-ui/react](https://chakra-ui.com/docs/getting-started)   | 1.6.4   | Styling          |
| [@emotion/react](https://emotion.sh/docs/introduction)           | 11.4.0  | Styling          |
| [@emotion/styled](https://emotion.sh/docs/introduction)          | 11.3.0  | Styling          |
| [typescript](https://www.typescriptlang.org/docs/)               | 4.3.4   | Types            |
| [axios](https://axios-http.com/)                                 | 0.21.1  | Requests         |
| [react-query](https://react-query.tanstack.com/overview)         | 3.17.2  | Queries          |
| [recoil](https://recoiljs.org/docs/introduction/installation)    | 0.3.1   | State Management |
| [next-seo](https://github.com/garmeeh/next-seo)                  | 4.26.0  | SEO              |
| [next-joi](https://github.com/codecoolture/next-joi)             | 2.2.1   | Route Validation |

## Libraries Of Interests

| Package                                                                    | Version | Use                    |
| -------------------------------------------------------------------------- | ------- | ---------------------- |
| [@next-auth/react-query](https://github.com/nextauthjs/react-query#readme) | 0.0.9   | Authentication         |
| [next-useragent](https://github.com/tokuda109/next-useragent)              | 2.6.0   | Device Useragent       |
| [react-hook-form](https://react-hook-form.com)                             | 7.9.0   | Forms                  |
| [joi](https://joi.dev/)                                                    | 17.4.0  | Form Validation Schema |

## Foreword

Performance metrics are also logged in the console below is a list of the abbreviations and what they mean:

| Abbreviation | What it means            |
| ------------ | ------------------------ |
| TTFB         | Time to First Byte       |
| FCP          | First Contentful Paint   |
| LCP          | Largest Contentful Paint |
| FID          | First Input Delay        |
| CLS          | Cumulative Layout Shift  |

## Getting Started

The template is running on Yarn and uses an **.nvmrc** file.

To get started:

- Run `nvm use` to ensure you're running the correct Node version
- Run `yarn` to install dependencies
- After dependencies have been installed, run `yarn dev` to get it up and running locally

## Scripts

| Script     | What it does                                                                  |
| ---------- | ----------------------------------------------------------------------------- |
| dev        | starts the application in development mode w/ lint concurrently               |
| build      | creates an optimised production build of your application                     |
| lint       | runs ES Linting                                                               |
| lint-watch | runs ES Linting in watch mode                                                 |
| start      | starts the application in production mode. run `build` first before doing so. |
| export     | generates the static pages                                                    |

## ENV

### PUBLIC ENV

Environment files will be divided into 2 eg. `.env.development` and `.env.production`. These files should contain the following as an example:

- NEXT_PUBLIC_APP_NAME=My Application Name
- NEXT_PUBLIC_APP_PREFIX=MAN
- NEXT_PUBLIC_BASE_URL=https://www.someurl.com
- NEXT_PUBLIC_GA_TRACKING_ID=123456

**Note that prefix `NEXT_PUBLIC` is required to make it available in the browser.**

And remember: **DO NOT COMMIT NOR PUSH THESE ENV FILES WITH SECRETS!** Finally, refer to [NextJS Env Variables Docs](https://nextjs.org/docs/basic-features/environment-variables) for further information if required.

## File Structure

### Overall Structure

```
project
|   .babelrc
|   .eslintrc.js
|   .gitignore
|   .nvmrc
|   .prettierignore
|   prettier.config.js
|   package.json
|   README.md
└───api
└───components
└───hooks
└───pages
└───theme
└───utils
```

### API

The **api** directory is where all API calls are located. This will also where endpoint constants can be declared.

### Components

The components directory consists of 2 main directories namely **common** and **pages** whereby **common**, houses components that are commonly used and **pages**, whereby one-off components that directly relates to a page and isn't used anywhere else is housed.

For stateful components, a single component directory can have a **styled** directory, where styled components will live and or a **state** directory, where Recoil state will live in.

### Theme

Styles are powered by Chakra UI and Emotion for styled components. Important thing of note is that the **theme** directory will always be the single source of truth for style related things. Before creating a new component, consider whether if it needs to be defined in the theme directory and proceed accordingly.

The **theme** directory is where the Chakra-UI theme is found. As of writing it is comprised of 2 directories namely **components** and **foundations**. Below is a description what those directories house.

#### **Components**

The **theme/components** directory houses custom styles for components. An example would be the **theme/components/headings.ts** file. Here we create the base, variants or maybe sizing styles for those components.

#### **Foundations**

The **theme/foundations** directory is where custom style and or other configurations are kept. These configurations will then be used to override Chakra-UI's default theme.

### Hooks

As the directory name implies, this is where all React hooks will be.

### Utils

The **utils** directory will be where general, generic utility functions are kept.

## Notes And Other Instructions

### Setting Up Storybook

To add Storybook to the project, simply run `npx sb init` and follow the prompts.

### Module Path Aliasing

There are 2 files of concern in regards to Module Path Aliasing which are **.eslintrc.js** and **tsconfig.json**. Both files are found at root and the path alias definitions are dictated by **tsconfig.json**.

```js
  // ./eslintrc.js
  // import/resolver will be required to resolve paths.
  // an empty object is passed to the "typescript" property to
  // instruct it to load from <rootdir>/tsconfig.json paths to eslint.

  "settings": {
    "import/resolver": {
      "typescript": {}
    },
  }
```

```js
  // ./tsconfig.json
  // in here, we define our paths under "compilerOptions"

  "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/components/*": ["components/*"],
        "@/hooks/*": ["hooks/*"],
        "@/theme/*": ["theme/*"]
        ...
      },
    ...
  }
  ...
```

### Random errors

NextJS prebuilds a lot of content to a .next folder. This will often cause errors when changing a large amount of code. It can cause seemingly random errors. To avoid this, delete the .next folder using `rm -rf .next`, or set up an alias using `alias redev='rm -rf .next && yarn dev'` in your .zshrc file. This will allow you to simply run `redev` instead of `yarn dev` and it will always clean out the .next folder.
