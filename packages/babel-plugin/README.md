# Fast-Styles Babel Plugin

This is a plugin that generates the stylemap used by fast-styles at transpile time.


## Installation

```sh
npm install --save-dev @fast-styles/babel-plugin
```

or 

```sh
yarn add -D @fast-styles/babel-plugin
```

## Configuration

You need to add the plugin to your Babel configuration file for it to work.

```js
// 1. Import the Fast-Styles Babel Plugin
const babelPluginFastSyles = require('@fast-styles/babel-plugin');

module.exports = {
  plugins: [
     // 2. Add the plugin to the list
     babelPluginFastSyles,
  ],
};

```
