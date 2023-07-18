import type { StyledObject } from "./types";

/**
 * Generate an array with all possible combinations of variants.
 */
function generateCompoundKeyList(
  sortedVariantsKeys: any,
  variantsObject: any,
  index: number,
  path: string = ""
): any {
  const variantName = sortedVariantsKeys[index];
  const variant = variantsObject[variantName];
  const options = [...Object.keys(variant)];

  return options
    .filter((x) => !x.includes("+"))
    .map((option) => {
      const nextVariant = index + 1;

      if (nextVariant < sortedVariantsKeys.length) {
        return generateCompoundKeyList(
          sortedVariantsKeys,
          variantsObject,
          nextVariant,
          path ? path + "+" + option : option
        );
      } else {
        return path ? `${path}+${option || ""}` : option;
      }
    })
    .flat();
}

/**
 * Build the style objects for each compound key, including all variants of that rule and the base styles.
 */
function mergeRules(variants: any) {
  let mergedVariants: any = {};

  const normalizedCompare = (a: any, b: any) => {
    const lists = Object.keys(variants)
      .sort()
      .map((k) => variants[k]);

    const aIndex = lists.findIndex((list: any) => {
      return Object.keys(list).includes(a);
    });
    const bIndex = lists.findIndex((list: any) => {
      return Object.keys(list).includes(b);
    });

    if (aIndex === -1) {
      console.warn(`Missing variant:${a}`);
      return 1;
    }
    if (bIndex === -1) {
      console.warn(`Missing variant:${b}`);

      return -1;
    }
    return aIndex - bIndex;
  };

  Object.values(variants).forEach((variant: any) => {
    Object.keys(variant).forEach((rule) => {
      const normalizedRule = rule.split("+").sort(normalizedCompare).join("+");
      const ruleStyles = variant[rule];
      mergedVariants = { ...mergedVariants, [normalizedRule]: ruleStyles };
    });
  });

  return mergedVariants;
}

/**
 * Generate the dependency extractor for runtime usage.
 */
export function generateDependenciesExtractor(
  styledObject: StyledObject<any, any>
): any {
  const { variants } = styledObject;
  const variantKeys = Object.keys(variants).sort();

  return (props: any) => variantKeys.map((key: any) => (props as any)[key]);
}

/**
 * Process the Fast Style's style and variant object and return the complete style map.
 */
export function generateStyles(styledObject: StyledObject<any, any>) {
  const { variants, ...baseStyles } = styledObject;

  const variantKeys = Object.keys(variants).sort();
  const mergedRules = mergeRules(variants);

  const result = generateCompoundKeyList(variantKeys, variants, 0, "");

  const mergedStyles = result.reduce((mergedStyles: any, compundRule: any) => {
    let currentStyle = baseStyles;
    Object.keys(mergedRules).forEach((rule: any) => {
      if (compundRule.includes(rule)) {
        currentStyle = { ...currentStyle, ...mergedRules[rule] };
      }
    });
    mergedStyles[compundRule] = currentStyle;
    return mergedStyles;
  }, {});

  return mergedStyles;
}
