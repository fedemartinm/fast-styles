import { borderRadiuses } from './borderRadiuses';
import { colors } from './colors';
import { fontSizes } from './fontSizes';
import { fontWeights } from './fontWeights';
import { fonts } from './fonts';
import merge from 'lodash.merge';
import { spacings } from './spacings';
import { styles } from './styles';
import { tokens } from './tokens';

export const defaultTheme = {
  colors,
  fonts,
  borderRadiuses,
  fontWeights,
  fontSizes,
  spacings,
  styles,
  tokens,
};

/**
 * Creates a new theme object based on the provided theme and freezes it.
 */
export function createTheme<T>(theme: T) {
  return Object.freeze(theme);
}

/**
 * Merges two theme objects and returns the resulting merged theme object, which is then frozen.
 *
 * @param themeA - The first theme object to be merged.
 * @param themeB - The second theme object to be merged.
 */
export function mergeTheme<A, B>(themeA: A, themeB: B) {
  return Object.freeze(merge(themeA, themeB));
}

/**
 * Extends the default theme object with the provided theme object and returns the resulting merged theme object, which is then frozen.
 *
 * @param theme - The theme object to extend the default theme with.
 */
export function extendDefaultTheme<T>(theme: T) {
  return Object.freeze(merge(defaultTheme, theme));
}
