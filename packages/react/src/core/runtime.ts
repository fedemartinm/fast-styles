/**
 * This file contains the runtime implementation of the fast-styles library.
 * Each change applied to the data structure must also be applied to the Babel plugin, as these files work together in conjunction.
 */
import type { KeyResolver, StyleProperties, StyleResolver, StyledObject } from '../types';

type VariantNode = {
  compoundVars: {
    rule: string[];
    style: any;
  }[];
  variantKeys: any;
  variants: any;
  styles: any;
  index?: number;
  path?: string[];
};

// Generates a map with compound keys, which will be used to apply those styles when the tree is traversed.
function getCompoundVariantsMap(compoundVariants: any) {
  if (!compoundVariants) {
    return [];
  }
  return Object.keys(compoundVariants).map((compoundVariant) => ({
    rule: compoundVariant.split('+'),
    style: compoundVariants[compoundVariant],
  }));
}

function variantsNodeTraversal(node: VariantNode): any {
  const index = node.index || 0;
  const path = node.path || [];

  // current variant data
  const variantName = node.variantKeys[index];
  const variant = node.variants[variantName];
  const variantOptions = Object.keys(variant);

  // skip empty variant
  if (variantOptions.length === 0) {
    if (index + 1 < node.variantKeys.length) {
      return variantsNodeTraversal({
        compoundVars: node.compoundVars,
        variantKeys: node.variantKeys,
        variants: node.variants,
        styles: node.styles,
        index: index + 1,
        path: [...path, ''],
      });
    } else {
      const styleMapKey = path.join('+');
      return { [styleMapKey]: node.styles };
    }
  }

  return variantOptions.reduce((stylesMap, option) => {
    // current node
    const currentPath = [...path, option];

    // variant styles
    let optionStyles = { ...node.styles, ...variant[option] };
    //console.log(`%c +Applying styles[${variantName}][${option}]`, 'color: #d53a3a;');

    // compound variant styles
    node.compoundVars.forEach((cv) => {
      if (cv.rule.every((variant) => currentPath.includes(variant))) {
        optionStyles = { ...optionStyles, ...cv.style };
        //console.log(`%c +Applying compound[${cv.rule.join('+')}]`, 'color: #128aaf;');
      }
    });

    // go deeper
    if (index + 1 < node.variantKeys.length) {
      const subStylesMap = variantsNodeTraversal({
        compoundVars: node.compoundVars,
        variantKeys: node.variantKeys,
        variants: node.variants,
        styles: optionStyles,
        index: index + 1,
        path: currentPath,
      });
      return { ...stylesMap, ...subStylesMap };
    } else {
      // save styles
      const styleMapKey = currentPath.join('+');
      //console.log(`%c"${styleMapKey}" added to stylemap`, 'color: #f4e840;');
      return { ...stylesMap, [styleMapKey]: optionStyles };
    }
  }, {} as Record<string, any>);
}

// Perform a depth-first traversal and create keys with the nodes from the root to each leaf
function variantsTreeTraversal(styledObject: StyledObject<any, any, any>): Record<string, StyleProperties> {
  const { attributes, variants, styleProps, compoundVariants, defaultVariants: _, ...styles } = styledObject;
  const variantKeys = Object.keys(variants || {}).sort();

  // generate default stylemap
  if (variantKeys.length === 0) {
    return { default: styles };
  }

  const compoundVars = getCompoundVariantsMap(compoundVariants);

  return variantsNodeTraversal({
    compoundVars,
    variantKeys,
    variants,
    styles,
  });
}

/**
 * Creates a function that resolves the key for the style map based on the given styled object.
 */
function getKeyResolver(styledObject: StyledObject<any, any, any>): KeyResolver {
  const defaultVariants = styledObject.defaultVariants || {};
  const keys = Object.keys(styledObject.variants || {}).sort();
  if (keys.length === 0) {
    return () => 'default';
  }
  // Resolves the key for the style map based on the given props,
  // If it is not defined in the properties, look in defaultVariants,
  // If it is not found, assign the first option of that variant.
  return (props: any) => {
    return keys
      .map((key) => {
        let variantKey = props[key];
        variantKey = variantKey ? variantKey : defaultVariants[key];
        variantKey = variantKey ? variantKey : Object.keys(styledObject.variants[key])[0];
        return variantKey || '';
      })
      .join('+');
  };
}

/**
 * Creates a function that maps props to style attributes based on the given styled object
 */
function getStyleResolver(styledObject: StyledObject<any, any, any>): StyleResolver {
  const entries = Object.entries(styledObject.styleProps || {});
  // Resolves the styles based on the given props
  return (props: any) => {
    return entries.reduce((style: any, prop: any) => {
      const [componentProp, styleProp] = prop;
      style[styleProp] = props[componentProp];
      return style;
    }, {});
  };
}

export { variantsTreeTraversal, getStyleResolver, getKeyResolver };
