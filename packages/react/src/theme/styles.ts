import { colors } from './colors';

export const styles = {
  //shadows variants
  shadows: {
    light: {
      topShadow1: {
        shadowColor: colors.$grey4,
        shadowOpacity: 0.18,
        shadowRadius: 5,
        shadowOffset: { height: -1, width: 0 },
        elevation: 2,
      },
      topShadow2: {
        shadowColor: colors.$grey4,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { height: -2, width: 0 },
        elevation: 3,
      },
      topShadow3: {
        shadowColor: colors.$grey4,
        shadowOpacity: 0.2,
        shadowRadius: 12,
        shadowOffset: { height: -5, width: 0 },
        elevation: 4,
      },
      bottomShadow1: {
        shadowColor: colors.$grey4,
        shadowOpacity: 0.18,
        shadowRadius: 5,
        shadowOffset: { height: 1, width: 0 },
        elevation: 2,
      },
      bottomShadow2: {
        shadowColor: colors.$grey4,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { height: 2, width: 0 },
        elevation: 3,
      },
      bottomShadow3: {
        shadowColor: colors.$grey4,
        shadowOpacity: 0.2,
        shadowRadius: 12,
        shadowOffset: { height: 5, width: 0 },
        elevation: 4,
      },
    },
    dark: {
      topShadow1: {
        shadowColor: 'transparent',
        shadowOpacity: 0.18,
        shadowRadius: 5,
        shadowOffset: { height: -1, width: 0 },
      },
      topShadow2: {
        shadowColor: 'transparent',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { height: -2, width: 0 },
      },
      topShadow3: {
        shadowColor: 'transparent',
        shadowOpacity: 0.2,
        shadowRadius: 12,
        shadowOffset: { height: -5, width: 0 },
      },
      bottomShadow1: {
        shadowColor: 'transparent',
        shadowOpacity: 0.18,
        shadowRadius: 5,
        shadowOffset: { height: 1, width: 0 },
      },
      bottomShadow2: {
        shadowColor: 'transparent',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { height: 2, width: 0 },
      },
      bottomShadow3: {
        shadowColor: 'transparent',
        shadowOpacity: 0.2,
        shadowRadius: 12,
        shadowOffset: { height: 5, width: 0 },
      },
    },
  },
};
