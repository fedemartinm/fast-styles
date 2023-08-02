import { PlatformSelect } from '../helpers/Platform';

export const fonts = {
  $heading: PlatformSelect({
    ios: 'System',
    android: 'Roboto',
    web: 'sans-serif',
  }),
  $body: PlatformSelect({
    ios: 'System',
    android: 'Roboto',
    web: 'sans-serif',
  }),
  $mono: PlatformSelect({
    ios: 'Menlo',
    android: 'monospace',
    web: 'monospace',
  }),
};
