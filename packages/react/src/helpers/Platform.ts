/**
 * React-Native is a peer dependency and may not be installed when using Fast Styles on the web
 */
import type { Platform } from 'react-native';

let PlatformSelect: Platform['select'];
try {
  PlatformSelect = require('react-native').Platform.select;
} catch (error) {
  const message =
    '⚠️ Fast Styles is designed to be used with React Native in mobile applications or on the web.' +
    'However, it is written without direct dependencies on React Native, making it suitable for ' +
    'use in a regular React app as well. If you want to use Fast Styles on the web without React Native' +
    'and have good reasons to do so, please let us know at: https://github.com/fedemartinm/fast-styles/issues,' +
    ' and we will improve the code to avoid the React Native warning.';
  console.log(message);
  PlatformSelect = (specify: any) => specify.web;
}

export { PlatformSelect };
