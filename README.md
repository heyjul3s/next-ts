# NEXT-TS

A Typescript powered NextJS kit with Chakra UI, RecoilJS, React Query, Cypress, Storybook and friends.

At a glance:

| Dependency                                                       | Version |
| ---------------------------------------------------------------- | ------- |
| [next](https://nextjs.org/docs/getting-started)                  | 12.1.6  |
| [@axe-core/react](https://www.npmjs.com/package/@axe-core/react) | 4.4.3   |
| [@chakra-ui/react](https://chakra-ui.com/docs/getting-started)   | 2.2.1   |
| [typescript](https://www.typescriptlang.org/docs/)               | 4.7.4   |
| [axios](https://axios-http.com/)                                 | 0.27.2  |
| [recoil](https://recoiljs.org/docs/introduction/installation)    | 0.7.3   |
| [react-query](https://react-query.tanstack.com/overview)         | 3.39.1  |
| [react-hook-form](https://react-hook-form.com)                   | 7.32.2  |
| [cypress](https://docs.cypress.io/)                              | 10.1.0  |

Featuring:

- Accessibility with axe-core
- ii8n setup
- Integration and E2E testing with Cypress, React Testing Library and Jest
- Storybook for component documentation
- Google Analytics
- SEO

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
└───requests
└───components
└───hooks
└───pages
└───theme
└───utils
```

### Requests

The **requests** directory is where all API calls are located. This will also where endpoint constants can be declared.

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

### Google Analytics

Performance metrics are logged in the console below is a list of the abbreviations and what they mean:

| Abbreviation | What it means            |
| ------------ | ------------------------ |
| TTFB         | Time to First Byte       |
| FCP          | First Contentful Paint   |
| LCP          | Largest Contentful Paint |
| FID          | First Input Delay        |
| CLS          | Cumulative Layout Shift  |

### Storybook

Stories are setup to live in `src/stories` along with a Chakra UI context provider plus light and dark mode capabilities. You can configure for a different directory if you wish via `.storybook/main.js`.

### Web Workers

To include Web Workers in the project. First install the **worker-plugin** package.

```sh
yarn add worker-plugin
```

Next, include the **worker-plugin** in Webpack's config via updating **next.config.js**

```js
const withPlugins = require('next-compose-plugins');
const { i18n } = require('./next-i18next.config');
const WorkerPlugin = require('worker-plugin');

const nextConfig = {
  target: 'serverless',
  reactStrictMode: true,
  i18n,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.plugins.push(
        new WorkerPlugin({
          globalObject: 'self'
        })
      );
    }
    return config;
  }
};

module.exports = withPlugins([], nextConfig);
```

Finally, update **tsconfig's** compiler option property and you should be good to go.

```json
{
  ...
  "compilerOptions": {
      :
      "lib": ["dom", "es2017", "webworker"],
      :
  }
  ...
}
```

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
