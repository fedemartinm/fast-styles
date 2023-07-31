import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

/**
 * Define the properties accepted by the styled HOC.
 */
export type StyleProperties = ViewStyle | TextStyle | ImageStyle;

/**
 * Represents the function called at runtime to get a key based on the current variants.
 */
export type KeyResolver = (props: any) => string;

/**
 * This represents the function called at runtime to get styles derived from the props.
 */
export type StyleResolver = (props: any) => StyleProperties;

/**
 * This represents the main argument of the styled Higher-Order Component (HOC).
 */
export type StyledObject<Props, Variants, Binds> = StyleProperties & {
  variants?: Variants;
  defaultVariants?: Partial<VariantsProps<Variants>>;
  compoundVariants?: Record<string, StyleProperties>;
  attributes?: AttributeOf<Props>;
  styleProps?: Binds;
};

/**
 * Represents the variants of a styled object
 */
export type VariantsType = {
  [Variant in string]: {
    [Option in string]: StyleProperties;
  };
};

/**
 * Represents prop-to-style bindings
 */
export type PropsBind = { [key in string]: keyof StyleProperties };

/**
 * Generates allowed properties from prop-styles
 */
export type StyleProps<Bind extends PropsBind> = {
  [k in keyof Bind]?: StyleProperties[Bind[k]];
};

/**
 * Allowed attributes
 */
export type AttributeOf<Props> = {
  [key in keyof Props]: Props[key];
};

/**
 * Add style to type T
 */
export type WithStyles<T> = T & {
  style?: StyleProperties;
};

/**
 * Generates allowed properties from variants
 */
export type VariantsProps<T> = {
  [K in keyof T]: keyof T[K];
};
