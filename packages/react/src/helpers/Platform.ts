/**
 * React-Native is a peer dependency and may not be installed when using Fast Styles on the web
 */
import type { Platform } from 'react-native';

let PlatformSelect: Platform['select'];
try {
  PlatformSelect = require('react-native').Platform.select;
} catch (error) {
  PlatformSelect = (specify: any) => specify.web;
}
export { PlatformSelect };
