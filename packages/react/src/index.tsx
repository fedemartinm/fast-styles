import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { StyledObject, VariantsOf } from '@fast-styles/core';
import {
  generateDependenciesExtractor,
  generateStyles,
} from '@fast-styles/core';

import type { ComponentType } from 'react';
import React from 'react';
import { useMemo } from 'react';

type StyleProperties = ViewStyle | TextStyle | ImageStyle;

/**
 * Higher-order component that applies styles to a component based on variants.
 */
export function styled<
  Props extends object,
  Variants extends Record<string, Record<string, StyleProperties>>
>(
  Component: ComponentType<Props>,
  styledObject: StyledObject<Variants, StyleProperties>,
  __INJECTED_STYLES?: Record<string, StyleProperties>,
  __INJECTED_DEPENDENCY_EXTRACTOR?: (props: Props) => [keyof Props]
) {
  // Obtains the generated styles at runtime or generates them in real-time
  let styles: Record<string, StyleProperties>;
  if (__INJECTED_STYLES) {
    console.log('injected styles found');
    styles = __INJECTED_STYLES;
  } else {
    console.log('injected styles not found');
    styles = generateStyles(styledObject);
  }
  // Obtains the runtime-generated dependency extractor or generates it on the fly
  let getDependencies: (props: Props) => [keyof Props];
  if (__INJECTED_DEPENDENCY_EXTRACTOR) {
    //console.log("injected extractor found");
    getDependencies = __INJECTED_DEPENDENCY_EXTRACTOR;
  } else {
    //console.log("injected extractor not found");
    getDependencies = generateDependenciesExtractor(styledObject);
  }

  return (props: Props & VariantsOf<Variants>) => {
    const dependencies = getDependencies(props);
    //console.log("GENERATED-STYLES", styles);
    //console.log('GENERATED-DEPENDENCIES', dependencies);
    const memoizedStyles = useMemo(() => {
      const [style, ...rest] = dependencies;
      const styleKey = rest.join('+');
      // merge style prop
      if (style) {
        return [styles[styleKey], style];
      } else {
        return styles[styleKey];
      }
    }, dependencies);

    //console.log('APPLYING-STYLES', memoizedStyles);

    return <Component {...props} style={memoizedStyles} />;
  };
}
