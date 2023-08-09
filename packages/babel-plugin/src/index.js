/**
 * This file contains the transpile-time implementation of the fast-styles library.
 * Each change applied to the data structure must also be applied to runtime version, as these files work together in conjunction.
 */

export default function babelPluginWithStyles({ types }) {
  return {
    visitor: {
      CallExpression(path) {
        if (types.isIdentifier(path.node.callee, { name: 'styled' })) {
          const styledObjectNode = path.node.arguments[1];

          // check config rules
          const configuration = getConfigRules(path);

          // runtime next
          if (configuration.runtimeNext) {
            return;
          }

          // skip optimizations
          if (types.isIdentifier(styledObjectNode)) {
            console.warn(
              'You used an identifier as an argument for the styled HOC. Fast-styles cannot optimize the styles at compile time.'
            );
            return;
          }

          if (!types.isObjectExpression(styledObjectNode)) {
            console.error('styled argument must be an object expression');
            return;
          }

          // extract-properties
          const variants = extractProperty(styledObjectNode, 'variants');
          const attributes = extractProperty(styledObjectNode, 'attributes');
          const styleProps = extractProperty(styledObjectNode, 'styleProps');
          const defaultVariants = extractProperty(styledObjectNode, 'defaultVariants');
          const compoundVariants = extractProperty(styledObjectNode, 'compoundVariants');
          const styles = styledObjectNode;

          // generate compound map
          const compoundVars = getCompoundVariantsMap(compoundVariants);
          const variantKeys = getNodeKeys(variants);

          // keep other styledObject properties
          const styledObjectReplacement = getStyledObjectReplacement(types, attributes, styleProps);

          // generate default style-map
          if (variantKeys.length === 0) {
            path.node.arguments[1] = styledObjectReplacement;
            path.node.arguments[2] = getDefaultStylemap(types, styles);
            path.node.arguments[3] = getDefaultStylemapKey(types);
            path.node.arguments[4] = getStyleResolver(types, styleProps);
            return;
          }

          // generate styles-map
          const stylesMap = variantsNodeTraversal(types, {
            compoundVars,
            variantKeys,
            variants,
            styles,
          });

          // inject styles-map and key-generator
          path.node.arguments[1] = styledObjectReplacement;
          path.node.arguments[2] = stylesMap;
          path.node.arguments[3] = getStylemapKey(types, variantKeys, variants, defaultVariants);
          path.node.arguments[4] = getStyleResolver(types, styleProps);
        }
      },
    },
  };
}

// Perform a depth-first traversal and create keys with the nodes from the root to each leaf
function variantsNodeTraversal(types, node) {
  const index = node.index || 0;
  const path = node.path || [];

  // current variant data
  const variantName = node.variantKeys[index];
  const variant = getPropertyValue(node.variants, variantName);
  const variantOptions = getNodeKeys(variant);

  // skip empty variant
  if (variantOptions.length === 0) {
    if (index + 1 < node.variantKeys.length) {
      return variantsNodeTraversal(types, {
        compoundVars: node.compoundVars,
        variantKeys: node.variantKeys,
        variants: node.variants,
        styles: node.styles,
        index: index + 1,
        path: [...path, ''],
      });
    } else {
      const styleMapProperty = types.objectProperty(types.stringLiteral(path.join('+')), node.styles);
      return types.objectExpression([styleMapProperty]);
    }
  }

  return variantOptions.reduce((stylesMap, option) => {
    // current node
    const currentPath = [...path, option];

    // merge styles with base styles
    const variantStyles = getPropertyValue(variant, option);
    let optionStyles = types.objectExpression([...node.styles.properties, ...variantStyles.properties]);

    // compound variant styles
    node.compoundVars.forEach((cv) => {
      if (cv.rule.every((variant) => currentPath.includes(variant))) {
        // merge compound styles with base styles
        optionStyles = types.objectExpression([...optionStyles.properties, ...cv.style.properties]);
      }
    });

    // go deeper
    if (index + 1 < node.variantKeys.length) {
      const subStylesMap = variantsNodeTraversal(types, {
        compoundVars: node.compoundVars,
        variantKeys: node.variantKeys,
        variants: node.variants,
        styles: optionStyles,
        index: index + 1,
        path: currentPath,
      });
      stylesMap.properties = [...stylesMap.properties, ...subStylesMap.properties];
      return stylesMap;
    } else {
      // save styles
      const styleMapProperty = types.objectProperty(types.stringLiteral(currentPath.join('+')), optionStyles);
      stylesMap.properties.push(styleMapProperty);

      return stylesMap;
    }
  }, types.objectExpression([]));
}

// Gets the name of a property, regardless of the type of key
function getPropertyName(property) {
  if (property.key.type === 'StringLiteral') {
    return property.key.value;
  } else if (property.key.type === 'Identifier') {
    return property.key.name;
  } else {
    throw 'Fast-Styles: Expected StringLiteral or Identifier.';
  }
}

// Removes the specified property from the given object
function extractProperty(objectExpressionNode, propertyName) {
  const propertyIndex = objectExpressionNode.properties.findIndex(
    (property) => propertyName === getPropertyName(property)
  );

  let extractedProperty;

  if (propertyIndex !== -1) {
    const [propertyObj] = objectExpressionNode.properties.splice(propertyIndex, 1);
    extractedProperty = propertyObj.value;
    if (extractedProperty.type !== 'ObjectExpression') {
      throw `Invalid type for "${propertyName}". Expected "ObjectExpression", got "${extractedProperty.type}".`;
    }
  }
  return extractedProperty;
}

// Generates a map with compound keys, which will be used to apply those styles when the tree is traversed.
function getCompoundVariantsMap(compoundVariants) {
  if (!compoundVariants) {
    return [];
  }
  return compoundVariants.properties.map((property) => {
    let propertyName = getPropertyName(property);

    if (property.value.type !== 'ObjectExpression') {
      throw `Invalid variant option type for "${propertyName}". Expected "ObjectExpression", got "${property.value.type}".`;
    }
    return {
      rule: propertyName.split('+'),
      style: property.value,
    };
  });
}

// Like Object.keys but for a node.
function getNodeKeys(node) {
  if (!node) {
    return [];
  }
  const nodeKeys = node.properties.map((property) => {
    return getPropertyName(property);
  });
  return nodeKeys.sort();
}

// Property getter
function getPropertyValue(node, propertyName) {
  const propertyIndex = node.properties.findIndex((property) => propertyName === getPropertyName(property));
  if (propertyIndex !== -1) {
    return node.properties[propertyIndex].value;
  }
  return null;
}

// Creates a single stylemap entry called 'default'
function getDefaultStylemap(types, styles) {
  const styleMapProperty = types.objectProperty(types.stringLiteral('default'), styles);
  return types.objectExpression([styleMapProperty]);
}

function getDefaultStylemapKey(types) {
  return types.arrowFunctionExpression([], types.stringLiteral('default'));
}

// Generate a function that will be executed at runtime to obtain styles derived from the properties.
function getStylemapKey(types, variantKeys, variants, defaultVariants) {
  const propsIdentifier = types.identifier('props');

  const variantOrDefault = variantKeys.map((property) => {
    let defaultValue = '';
    // find default value
    if (defaultVariants) {
      const defaultVariant = getPropertyValue(defaultVariants, property);
      if (defaultVariant) {
        defaultValue = defaultVariant.value;
      } else {
        const variant = getPropertyValue(variants, property);
        if (!types.isObjectExpression(variant)) {
          throw 'getStylemapKey: expected object expression';
        }
        const firstNode = variant.properties[0];
        if (firstNode) {
          defaultValue = getPropertyName(firstNode);
        }
      }
    }
    const memberExpression = types.memberExpression(propsIdentifier, types.identifier(property));
    const defaultLiteralValue = types.stringLiteral(defaultValue);
    return types.logicalExpression('||', memberExpression, defaultLiteralValue);
  });

  let joinedExpression = variantOrDefault[0];
  for (let i = 1; i < variantOrDefault.length; i++) {
    const plusOperator = types.stringLiteral('+');
    const plusExpresion = types.binaryExpression('+', joinedExpression, plusOperator);
    joinedExpression = types.binaryExpression('+', plusExpresion, variantOrDefault[i]);
  }

  return types.arrowFunctionExpression([propsIdentifier], joinedExpression);
}

// Generate a function that will be executed at runtime to obtain the key used to access the style map
function getStyleResolver(types, styleProps) {
  const propsIdentifier = types.identifier('props');
  if (!styleProps) {
    return types.arrowFunctionExpression([], types.objectExpression([]));
  }

  const styleProperties = styleProps.properties.map((property) => {
    let propertyName = getPropertyName(property);
    if (!types.isStringLiteral(property.value)) {
      throw 'getStyleResolver: Expected string literal.';
    }
    if (!types.isIdentifier(property.key)) {
      throw 'getStyleResolver: Expected identifier.';
    }
    const key = types.stringLiteral(property.value.value);
    const valueIdentifier = types.identifier(propertyName);
    const value = types.memberExpression(propsIdentifier, valueIdentifier);
    return types.objectProperty(key, value);
  });
  const resolverObject = types.objectExpression(styleProperties);

  return types.arrowFunctionExpression([propsIdentifier], resolverObject);
}

// Get the possible configuration rules for this plugin
function getConfigRules(path) {
  let config = {
    runtimeNext: false,
  };
  const parentNode = path.parentPath.node;
  const grandparentNode = path.parentPath.parentPath.node;
  const greatGrandparentNode = path.parentPath.parentPath.parentPath.node;

  let leadingComments;
  if (parentNode?.leadingComments?.length) {
    leadingComments = parentNode.leadingComments.pop();
  } else if (grandparentNode?.leadingComments?.length) {
    leadingComments = grandparentNode.leadingComments.pop();
  } else if (greatGrandparentNode?.leadingComments?.length) {
    leadingComments = greatGrandparentNode.leadingComments.pop();
  }

  if (leadingComments) {
    const rawComment = leadingComments.value.trim();
    config.runtimeNext = rawComment === 'fast-styles-runtime-next';
  }

  return config;
}

// Replaces the original argument of the `styled` HOC, leaving only the properties required at runtime.
function getStyledObjectReplacement(types, attributes, styleProps) {
  let properties = [];
  if (attributes) {
    properties.push(types.objectProperty(types.identifier('attributes'), attributes));
  }
  if (styleProps) {
    properties.push(types.objectProperty(types.identifier('styleProps'), styleProps));
  }
  return types.objectExpression(properties);
}
