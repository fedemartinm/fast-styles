import { Platform } from 'react-native';

export const fonts = {
  $heading: Platform.select({
    ios: 'System',
    android: 'Roboto',
    web: 'sans-serif',
  }),
  $body: Platform.select({
    ios: 'System',
    android: 'Roboto',
    web: 'sans-serif',
  }),
  $mono: Platform.select({
    ios: 'Menlo',
    android: 'monospace',
    web: 'monospace',
  }),
};
