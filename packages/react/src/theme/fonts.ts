//React-Native is a peer dependency and may not be installed when using Fast Styles on the web
let Platform;
try {
  Platform = require('react-native').Platform;
} catch (error) {
  Platform = {
    select: (options: any) => options.web,
  };
}

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
