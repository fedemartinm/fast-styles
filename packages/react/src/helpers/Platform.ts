/**
 * React-Native is a peer dependency and may not be installed when using Fast Styles on the web
 */
import type { Platform } from 'react-native';

let PlatformSelect: Platform['select'];

if (typeof (globalThis as any).window !== 'undefined') {
  PlatformSelect = (specify: any) => specify.web;
} else {
  PlatformSelect = require('react-native').Platform.select;
}

export { PlatformSelect };
