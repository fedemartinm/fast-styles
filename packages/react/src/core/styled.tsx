import type {
  KeyResolver,
  PropsBind,
  StyleProperties,
  StyleProps,
  StyleResolver,
  StyledObject,
  VariantsProps,
  VariantsType,
  WithStyles,
} from '../types';
import { getKeyResolver, getStyleResolver, variantsTreeTraversal } from './runtime';

import type { ComponentType } from 'react';
import React from 'react';

/**
 * Creates a fast styled component.
 *
 * @param Component - The component to be styled.
 * @param styledObject - An object containing styles, variants, and properties to apply.
 * @returns A fast styled component.
 */
export function styled<Props, Variants extends VariantsType, Binds extends PropsBind>(
  Component: ComponentType<Props>,
  styledObject: StyledObject<Props, Variants, Binds>,
  __INJECTED_STYLEMAP?: Record<string, StyleProperties>,
  __INJECTED_KEY_RESOLVER?: KeyResolver,
  __INJECTED_STYLE_RESOLVER?: StyleResolver
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { attributes, styleProps, defaultVariants: _ } = styledObject;

  // choose implementation
  const styleMap = __INJECTED_STYLEMAP || variantsTreeTraversal(styledObject);
  const resolveKey = __INJECTED_KEY_RESOLVER || getKeyResolver(styledObject);
  const resolveStyles = __INJECTED_STYLE_RESOLVER || getStyleResolver(styledObject);

  // return fast styled component
  return React.forwardRef((props: WithStyles<Props> | VariantsProps<Variants> | StyleProps<Binds>, ref) => {
    const key = resolveKey(props);
    let style = styleMap[key];

    // add style props
    if (styleProps) {
      style = Object.assign({}, style, resolveStyles(props));
    }

    // add inline-styles
    if (props.style) {
      style = Object.assign({}, style, props.style);
    }
    return <Component ref={ref} {...attributes} {...(props as Props)} style={style} />;
  });
}
