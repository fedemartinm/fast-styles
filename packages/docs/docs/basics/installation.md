---
sidebar_position: 2
description: Quick installation guide
---

# Installation

## Adding fast packages

- Use yarn or npm to add the library to your project

```bash
yarn add @fast-styles/react
// or
npm install --save @fast-styles/react
```

- Use yarn or npm to add the babel-plugin to your project

```bash
yarn add @fast-styes/babel-plugin
// or
npm install --save @fast-styles/babel-plugin
```

:::info
You can skip installing the babel plugin if you want. However, we highly recommend installing it to fully leverage the capabilities of this library
:::

## Configuration

If you have installed the Babel plugin, you need to configure it by adding the following line to the `babel.config.js` file:

```js
{
  "plugins": ["@fast-styles/babel-plugin"]
}
```

Once you have added the Babel plugin, the library is now configured and ready to use. You are all set for the next section!
